import { render } from './ui/app-ui';
import { fullSize } from './ui/style';
import { getSavedLanguage, saveLanguage } from './ui/state';
import { log } from './utility';
import { defaultLanguage, getLanguage } from './i18n';

main().catch(e => log(e.message));

function main() {
  const lang = getSavedLanguage() || 'en';

  return getLanguage(lang)
    .then(strings => {
      const element = window.document.createElement('section');
      element.className = `${fullSize}`;
      if (!element) {
        throw new Error(strings.errors.bootstrap);
      }
      window.document.body.appendChild(element);
      render(element, strings);
    })
    .catch(e => {
      log(
        defaultLanguage.i18n.part1,
        lang,
        defaultLanguage.i18n.part2,
        `(${e.message})`
      );
      saveLanguage('');
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          main()
            .then(resolve)
            .catch(reject);
        }, 100);
      });
    });
}
