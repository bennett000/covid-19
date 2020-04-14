import dl from '../i18n/en.json';
import { objReduce, isString, noop } from '@ch1/utility';

export type Strings = typeof dl;

export function getLanguage(lang: string) {
  return import(`../i18n/${lang}.json`).then(s => convertJsonToInjectedJson(s));
}

export function convertJsonToInjectedJson(strings: any): Strings {
  return objReduce(
    strings,
    (s, node, key) => {
      if (isString(node)) {
        Object.defineProperty(s, key, {
          get: () => node,
          set: noop,
        });
      } else {
        s[key] = convertJsonToInjectedJson(node);
      }
      s[key] = node;
      return s;
    },
    {}
  ) as Strings;
}
