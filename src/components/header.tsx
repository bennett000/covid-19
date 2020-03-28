import { h } from 'preact';
import { Strings } from '../i18n';

export function Header({ strings }: { strings: Strings }) {
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
