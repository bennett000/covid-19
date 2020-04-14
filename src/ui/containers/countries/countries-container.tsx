import { objReduce } from '@ch1/utility';
import { Component, h } from 'preact';
import { connect } from 'react-redux';
import { InputCountries } from '../../components/countries';
import { actions, select, CountriesProps } from './countries.state';

class BaseCountriesContainer extends Component<CountriesProps> {
  render() {
    return <InputCountries {...this.props} />;
  }
}

export const CountriesContainer = connect(
  state => ({
    ...objReduce(
      select,
      (newStateProps: any, selector: (state: any) => any, prop) => {
        newStateProps[prop] = selector(state);
        return newStateProps;
      },
      {}
    ),
    strings: state.strings,
  }),
  actions
)(BaseCountriesContainer);
