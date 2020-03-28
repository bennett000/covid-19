import { h } from 'preact';
import { strings } from '../constants';

export function Header() {
  return (
    <header class="small-text">
      {strings.header.title}&nbsp;
      <a
        href="https://github.com/CSSEGISandData/COVID-19"
        target="_blank"
        title={strings.header.jhuGitHubTitle}
      >
        {strings.header.jhuSourceDataLink}
      </a>
      &nbsp;
      {strings.header.explorer} (
      <a
        href="https://github.com/bennett000/covid-19"
        target="_blank"
        title={strings.header.sourceCodeTitle}
      >
        {strings.header.sourceCodeLink}
      </a>
      &nbsp;|&nbsp;
      <a
        href="https://github.com/bennett000/covid-19/issues"
        target="_blank"
        title={strings.header.feedbackTitle}
      >
        {strings.header.feedbackLink}
      </a>
      )
    </header>
  );
}
