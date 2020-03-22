import { render } from './app';
import { fullSize, flexCol } from './constants';

main();

function main() {
  const element = window.document.createElement('section');
  element.className = `${fullSize}`;
  if (!element) {
    throw new Error('Could not bootstrap the application');
  }
  window.document.body.appendChild(element);
  render(element);
}
