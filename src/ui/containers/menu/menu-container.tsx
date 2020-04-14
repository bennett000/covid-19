import { Component, h } from 'preact';
import { connect } from 'react-redux';
import { Menu, MenuProps } from '../../components/menu';
import * as routerState from '../../store/router';

class BaseMenuContainer extends Component<MenuProps> {
  render() {
    return <Menu {...this.props} />;
  }
}

export const MenuContainer = connect(
  state => ({
    labels: state.strings.app.menu.map(s => s.name),
    selected: routerState.select.pathIndex(state),
  }),
  {
    clicked: routerState.actions.updatedPath,
  }
)(BaseMenuContainer);
