import { objReduce } from '@ch1/utility';
import { Component, h } from 'preact';
import { connect } from 'react-redux';
import { InputSeir } from '../../components/seir';
import { actions, select, SeirProps } from './seir.state';

class BaseSeirContainer extends Component<SeirProps> {
  render() {
    return <InputSeir {...this.props} />;
  }
}

export const SeirContainer = connect(
  state =>
    objReduce(
      select,
      (newStateProps: any, selector: (state: any) => number, prop) => {
        newStateProps[prop] = selector(state);
        return newStateProps;
      },
      {}
    ),
  actions
)(BaseSeirContainer);
