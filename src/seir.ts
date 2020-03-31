// This code is entirely based on https://github.com/gabgoh/epcalc/blob/master/src/App.svelte
// which is currently (ostensibly) public domain
//

import { noop } from '@ch1/utility';

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

type SierState = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

function integrate(
  model: number[][],
  f: (time: number, state: SierState) => SierState,
  initialState: SierState,
  time: number,
  timeStep: number
): SierState {
  let localState: SierState = [...initialState] as SierState;
  let dt = 0;
  const k = [];
  let ki = 0;

  for (ki = 0; ki < model.length; ki += 1) {
    localState = [...initialState] as SierState;
    dt = ki ? model[ki - 1][0] * timeStep : 0;
    for (let l = 0; l < localState.length; l += 1) {
      for (let j = 1; j <= ki; j += 1) {
        localState[l] =
          localState[l] + timeStep * model[ki - 1][j] * k[ki - 1][l];
      }
    }
    k[ki] = f(time + dt, localState);
  }

  let r = [...initialState] as SierState;
  for (let l = 0; l < localState.length; l += 1) {
    for (let j = 0; j < k.length; j += 1) {
      r[l] = r[l] + timeStep * k[j][l] * model[ki - 1][j];
    }
  }

  return r;
}

export class Seir {
  static create(population = 7000000, I0 = 1, initialDeaths = 0) {
    return new Seir(population, I0, initialDeaths);
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

  private constructor(
    public N = 7000000,
    public I0 = 1,
    public initialDeaths = 0
  ) {}

  private f(t: number, x: SierState): SierState {
    const beta = this.R0 / this.D_infectious;
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
  }

  getSolution(
    solutionLength = 10,
    onStep: (
      s: Seir,
      day: [number, number, number, number, number],
      i: number
    ) => any = noop
  ) {
    const interpolationSteps = 40;
    let steps = solutionLength * interpolationSteps;
    const dt = this.dt / interpolationSteps;
    const method = Integrators.RK4;

    let v: SierState = [
      1 - this.I0 / this.N,
      0,
      this.I0 / this.N,
      0,
      0,
      0,
      0,
      0,
      0,
      this.initialDeaths / this.N,
    ];
    let t = 0;
    let dayCount = 0;
    const P = [];
    const TI = [];
    const Iters = [];
    while (steps--) {
      if ((steps + 1) % interpolationSteps == 0) {
        //    Dead   Hospital          Recovered        Infectious   Exposed
        const day: [number, number, number, number, number] = [
          this.N * v[9],
          this.N * (v[5] + v[6]),
          this.N * (v[7] + v[8]),
          this.N * v[2],
          this.N * v[1],
        ];
        P.push(day);
        Iters.push(v);
        TI.push(this.N * (1 - v[0]));
        onStep(this, day, dayCount++);
      }
      v = integrate(method, this.f.bind(this), v, t, dt);
      t += dt;
    }
    return {
      P: P,
      deaths: this.N * v[6],
      total: 1 - v[0],
      total_infected: TI,
      Iters: Iters,
      dIters: this.f.bind(this),
    };
  }
}
