import { h } from 'preact';

export function Header() {
  return (
    <header class="small-text">
      COVID-19
      <a
        href="https://github.com/CSSEGISandData/COVID-19"
        target="_blank"
        title="GitHub repository of source data maintained by Johns Hopkins University"
      >
        Johns Hopkins University Source Data
      </a>
      Explorer (
      <a
        href="https://github.com/bennett000/covid-19"
        target="_blank"
        title="Source code to this website"
      >
        source code
      </a>{' '}
      |
      <a
        href="https://github.com/bennett000/covid-19/issues"
        target="_blank"
        title="Provide feedback, suggest features, file issues, etc"
      >
        feedback
      </a>
      )
    </header>
  );
}
