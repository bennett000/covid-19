import rawPopulationData from 'country-json/src/country-by-population.json';
import rawPopulationDensityData from 'country-json/src/country-by-population-density.json';
import codesToStatesJson from '../../data/codes-to-states.json';
import countriesToCodesJson from '../../data/countries-to-codes.json';
import countriesToContinentsJson from '../../data/countries-to-continents.json';
import statesToCodesJson from '../../data/states-to-codes.json';
import mapJhuCountryToPopJson from '../../data/map-jhu-country-to-prop.json';
import manuallySourcePop from '../../data/manually-sourced-population.json';
import manuallySourceStatePop from '../../data/manually-sourced-population-state.json';

export const codesToStates = codesToStatesJson;
export const countriesToCodes = countriesToCodesJson;
export const countriesToContinents = countriesToContinentsJson;
export const mapJhuCountryToPop = mapJhuCountryToPopJson;
export const statesToCodes = statesToCodesJson;

const populationDictionary: {
  [key: string]: number;
} = (rawPopulationData || []).reduce((p, node) => {
  p[node.country] = parseInt(node.population, 10);
  return p;
}, {});

const populationDensityDictionary: {
  [key: string]: number;
} = (rawPopulationDensityData || []).reduce((p, node) => {
  p[node.country] = node.density === null ? null : parseInt(node.density, 10);
  return p;
}, {});

export function getPopulation(country: string, state?: string): number {
  if (state) {
    return getStatePopulation(country, state);
  }
  let population = populationDictionary[country];
  if (population) {
    return population;
  }
  population = populationDictionary[mapJhuCountryToPop[country]];
  if (population) {
    return population;
  }
  population = manuallySourcePop[country];
  if (population) {
    return population;
  }
  return 0;
}

export function getStatePopulation(country: string, state?: string) {
  if (manuallySourceStatePop[country]) {
    if (manuallySourceStatePop[country][state]) {
      return manuallySourceStatePop[country][state];
    }
  }
  return 0;
}

export function getPopulationDensity(country: string, state?: string): number {
  if (state) {
    return 0;
  }
  let populationDensity = populationDensityDictionary[country];
  if (populationDensity) {
    return populationDensity;
  }
  populationDensity = populationDensityDictionary[mapJhuCountryToPop[country]];
  if (populationDensity) {
    return populationDensity;
  }
  return 0;
}
