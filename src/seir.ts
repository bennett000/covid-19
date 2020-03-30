// This code is entirely based on https://github.com/gabgoh/epcalc/blob/master/src/App.svelte
// which is currently (ostensibly) public domain
//

const Integrators = Object.freeze({
  Euler: [[1]],
  Midpoint: [
    [0.5, 0.5],
    [0, 1],
  ],
  Heun: [
    [1, 1],
    [0.5, 0.5],
  ],
  Ralston: [
    [2 / 3, 2 / 3],
    [0.25, 0.75],
  ],
  K3: [
    [0.5, 0.5],
    [1, -1, 2],
    [1 / 6, 2 / 3, 1 / 6],
  ],
  SSP33: [
    [1, 1],
    [0.5, 0.25, 0.25],
    [1 / 6, 1 / 6, 2 / 3],
  ],
  SSP43: [
    [0.5, 0.5],
    [1, 0.5, 0.5],
    [0.5, 1 / 6, 1 / 6, 1 / 6],
    [1 / 6, 1 / 6, 1 / 6, 1 / 2],
  ],
  RK4: [
    [0.5, 0.5],
    [0.5, 0, 0.5],
    [1, 0, 0, 1],
    [1 / 6, 1 / 3, 1 / 3, 1 / 6],
  ],
  RK38: [
    [1 / 3, 1 / 3],
    [2 / 3, -1 / 3, 1],
    [1, 1, -1, 1],
    [1 / 8, 3 / 8, 3 / 8, 1 / 8],
  ],
});

function integrate(m, f, y, t, h) {
  for (var k = [], ki = 0; ki < m.length; ki++) {
    var _y = y.slice(),
      dt = ki ? m[ki - 1][0] * h : 0;
    for (var l = 0; l < _y.length; l++)
      for (var j = 1; j <= ki; j++)
        _y[l] = _y[l] + h * m[ki - 1][j] * k[ki - 1][l];
    k[ki] = f(t + dt, _y, dt);
  }
  for (var r = y.slice(), l = 0; l < _y.length; l++)
    for (var j = 0; j < k.length; j++) r[l] = r[l] + h * k[j][l] * m[ki - 1][j];
  return r;
}

export class Seir {
  static create(population = 7000000, I0 = 1, interventionTime = 100) {
    return new Seir(population, I0, interventionTime);
  }

  dt = 2;
  R0 = 2.2;
  D_incbation = 5.2;
  D_infectious = 2.9;
  D_recovery_mild = 14 - 2.9;
  D_hospital_lag = 5;
  D_recovery_severe = 31.5 - 2.9;
  Time_to_death = 32;
  D_death = this.Time_to_death - this.D_infectious;
  P_SEVERE = 0.2;
  CFR = 0.02;
  OMInterventionAmt = 0.63;
  InterventionAmt = 1 - this.OMInterventionAmt;
  duration = 7 * 12 * 1e10;

  private constructor(
    public N = 7000000,
    public I0 = 1,
    public InterventionTime = 100
  ) {}

  getSolution() {
    const interpolation_steps = 40;
    let steps = 110 * interpolation_steps;
    const dt = this.dt / interpolation_steps;
    const sample_step = interpolation_steps;
    const method = Integrators.RK4;

    const f = (t, x) => {
      // SEIR ODE
      if (
        t > this.InterventionTime &&
        t < this.InterventionTime + this.duration
      ) {
        var beta = (this.InterventionAmt * this.R0) / this.D_infectious;
      } else if (t > this.InterventionTime + this.duration) {
        var beta = (0.5 * this.R0) / this.D_infectious;
      } else {
        var beta = this.R0 / this.D_infectious;
      }
      const a = 1 / this.D_incbation;
      const gamma = 1 / this.D_infectious;

      const S = x[0]; // Susectable
      const E = x[1]; // Exposed
      const I = x[2]; // Infectious
      const Mild = x[3]; // Recovering (Mild)
      const Severe = x[4]; // Recovering (Severe at home)
      const Severe_H = x[5]; // Recovering (Severe in hospital)
      const Fatal = x[6]; // Recovering (Fatal)
      const p_severe = this.P_SEVERE;
      const p_fatal = this.CFR;
      const p_mild = 1 - this.P_SEVERE - this.CFR;
      const dS = -beta * I * S;
      const dE = beta * I * S - a * E;
      const dI = a * E - gamma * I;
      const dMild = p_mild * gamma * I - (1 / this.D_recovery_mild) * Mild;
      const dSevere = p_severe * gamma * I - (1 / this.D_hospital_lag) * Severe;
      const dSevere_H =
        (1 / this.D_hospital_lag) * Severe -
        (1 / this.D_recovery_severe) * Severe_H;
      const dFatal = p_fatal * gamma * I - (1 / this.D_death) * Fatal;
      const dR_Mild = (1 / this.D_recovery_mild) * Mild;
      const dR_Severe = (1 / this.D_recovery_severe) * Severe_H;
      const dR_Fatal = (1 / this.D_death) * Fatal;
      //      0   1   2   3      4        5          6       7        8          9
      return [
        dS,
        dE,
        dI,
        dMild,
        dSevere,
        dSevere_H,
        dFatal,
        dR_Mild,
        dR_Severe,
        dR_Fatal,
      ];
    };
    let v = [1 - this.I0 / this.N, 0, this.I0 / this.N, 0, 0, 0, 0, 0, 0, 0];
    let t = 0;
    const P = [];
    const TI = [];
    const Iters = [];
    while (steps--) {
      if ((steps + 1) % sample_step == 0) {
        //    Dead   Hospital          Recovered        Infectious   Exposed
        P.push([
          this.N * v[9],
          this.N * (v[5] + v[6]),
          this.N * (v[7] + v[8]),
          this.N * v[2],
          this.N * v[1],
        ]);
        Iters.push(v);
        TI.push(this.N * (1 - v[0]));
      }
      v = integrate(method, f, v, t, dt);
      t += dt;
    }
    return {
      P: P,
      deaths: this.N * v[6],
      total: 1 - v[0],
      total_infected: TI,
      Iters: Iters,
      dIters: f,
    };
  }
}
