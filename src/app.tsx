import Router from 'preact-router';
import { Component, h, render as preactRender } from 'preact';
import { LineGraph } from './feature-line-graph/line-graph';

export class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <LineGraph path={'/'}></LineGraph>
      </Router>
    );
  }
}

export function render(root: HTMLElement) {
  preactRender(<App />, root);
}
