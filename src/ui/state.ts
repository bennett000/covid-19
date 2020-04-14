import {
  isNumber,
  isString,
  Dictionary,
  isObject,
  objReduce,
} from '@ch1/utility';

const stateKey = 'state';
const langKey = 'lang';

export function getSavedLanguage() {
  let item = 'en';
  if (window.localStorage) {
    item = window.localStorage.getItem(langKey);
  }
  return item;
}
export interface DataDefaulter<T> {
  (value: any): T;
}
export interface DataType {
  prop: string;
  force: (thing: any) => boolean;
}

export function saveState(state: any) {
  if (window.localStorage) {
    window.localStorage.setItem(
      stateKey,
      JSON.stringify({
        ...state,
        strings: undefined,
        timeSeriesCollection: undefined,
      })
    );
  }
}

export function loadState<T>(force: DataDefaulter<T>): T | null {
  if (window.localStorage) {
    const item = window.localStorage.getItem(stateKey);
    if (item) {
      try {
        const parsed = JSON.parse(item);
        if (!parsed) {
          return null;
        }
        return force(parsed);
      } catch (err) {
        console.warn(err);
      }
    }
  }
  return null;
}

export function forceBoolean(defaultValue: boolean, value: any): boolean {
  if (value) {
    return true;
  }
  if (value === false) {
    return false;
  }
  return defaultValue;
}

export function forceNumber(defaultValue: number, value: any): number {
  if (isNumber(value)) {
    return value;
  }
  return defaultValue;
}

export function forceString(defaultValue: string, value: any): string {
  if (isString(value)) {
    return value;
  }
  return defaultValue;
}

export function forceArrayOf<T>(
  force: DataDefaulter<T>,
  defaultValue: T[],
  value: any
): T[] {
  if (Array.isArray(value)) {
    return value.map(force);
  }
  return JSON.parse(JSON.stringify(defaultValue));
}

export function forceDictionaryOf<T>(
  force: DataDefaulter<T>,
  defaultValue: Dictionary<T>,
  value: any
): Dictionary<T> {
  if (value && isObject(value)) {
    return objReduce(
      value,
      (dictionary, el, prop) => {
        dictionary[prop] = force(el);
        return dictionary;
      },
      {}
    );
  }
  return JSON.parse(JSON.stringify(defaultValue));
}

export function forceObject<T>(
  description: { prop: keyof T; force: DataDefaulter<any> }[],
  value: any
): T {
  const source = isObject(value) ? value : {};
  const obj: T = {} as any;

  description.forEach(desc => {
    obj[desc.prop] = desc.force(source[desc.prop]);
  });

  return obj;
}
