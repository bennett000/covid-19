import { render } from './ui/app-ui';
import { getSavedLanguage } from './ui/state';
import { defaultLanguage, getLanguage } from './i18n';
import { fetchData } from './data';
import { fullSize } from './ui/style';

main();

function main() {
  const lang = getSavedLanguage() || 'en';

  return Promise.all([fetchData(defaultLanguage), getLanguage(lang)])
    .then(([{ dictionary }, strings]) => {
      const section = window.document.createElement('section');
      if (!section) {
        throw new Error('could not create element');
      }
      section.className = fullSize;
      hideSpinner();
      window.document.body.appendChild(section);
      return render(section, dictionary, strings);
    })
    .catch(fail);
}

function fail(err: Error) {
  const section = window.document.createElement('section');
  const h2 = window.document.createElement('h2');
  const p = window.document.createElement('p');

  section.appendChild(h2);
  section.appendChild(p);
  p.innerHTML = `Critical Error fetching data: ${err.message}`;
  console.error(err);
  window.document.body.appendChild(section);
}

function hideSpinner() {
  const s1 = window.document.getElementById('spinner1');
  const s2 = window.document.getElementById('spinner2');
  window.document.body.removeChild(s1);
  window.document.body.removeChild(s2);
}
