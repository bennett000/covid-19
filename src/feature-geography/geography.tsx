import { Component, h } from 'preact';
import { ChartMap } from '../components/map';
import { Menu } from '../components/menu';
import { MenuProp } from '../interfaces';
import { flexCol, fullSize } from '../constants';

export class Geography extends Component<{
  menu: MenuProp;
}> {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // force chart to redraw
    this.setState({
      ...this.state,
    });
  }

  render() {
    return (
      <section className={`${fullSize} ${flexCol}`}>
        <ChartMap />
        <Menu config={this.props.menu}></Menu>
      </section>
    );
  }
}
