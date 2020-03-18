import { Component, h } from 'preact';
import { SelectOptions } from '../interfaces';
import { InputString } from './string';
import { SelectMultiple } from './select-multiple';
import { flexCol, flex } from '../constants';
import { isString } from '@ch1/utility';
import { Button } from './button';
import { isMobile } from '../utility';

type SelectMultipleFilterProps = {
  classes?: string[];
  onChange: (selected: number[]) => any;
  onClear: () => any;
  options: SelectOptions;
  selected: number[];
};

export class SelectMultipleFilter extends Component<
  SelectMultipleFilterProps,
  {
    filter: string;
    options: SelectOptions;
  }
> {
  constructor() {
    super();

    this.state = { filter: '', options: [] };
  }

  getOptions(props: SelectMultipleFilterProps, filter: string) {
    if (filter) {
      return props.options.filter(option => {
        if (isString(option)) {
          if (option.toLowerCase().indexOf(filter.toLowerCase()) === 0) {
            return true;
          }
          return false;
        } else {
          if (option.name.toLowerCase().indexOf(filter.toLowerCase()) === 0) {
            return true;
          }
          return false;
        }
      });
    } else {
      return this.props.options;
    }
  }

  updateFilter(filter: string) {
    this.setState({
      ...this.state,
      filter,
      options: this.getOptions(this.props, filter),
    });
  }

  clearFilter() {
    this.setState({
      ...this.state,
      filter: '',
      options: this.props.options,
    });
    this.props.onClear();
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      options: this.getOptions(this.props, this.state.filter),
    });
  }

  componentWillReceiveProps(props) {
    this.setState({
      ...this.state,
      options: this.getOptions(this.props, this.state.filter),
    });
  }

  render() {
    const givenClasses = this.props.classes ? this.props.classes.join(' ') : '';
    const className = givenClasses.length
      ? `${givenClasses} ${flexCol}`
      : flexCol;
    return (
      <div className={className}>
        <div className={flex}>
          {isMobile() ? (
            ''
          ) : (
            <InputString
              listenKeyUp={true}
              onChange={this.updateFilter.bind(this)}
              placeholder="filter"
              value={this.state.filter}
            />
          )}
          <Button label="✗" onClick={this.clearFilter.bind(this)}></Button>
        </div>
        <SelectMultiple
          onChange={this.props.onChange.bind(this)}
          options={this.state.options}
          selected={this.props.selected}
        />
      </div>
    );
  }
}
