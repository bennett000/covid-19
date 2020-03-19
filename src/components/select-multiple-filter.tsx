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
  onDeselect: (index: number) => any;
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
          if (option.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
            return true;
          }
          return false;
        } else {
          if (option.name.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
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

  componentWillReceiveProps(props: SelectMultipleFilterProps) {
    this.setState({
      ...this.state,
      options: this.getOptions(props, this.state.filter),
    });
  }

  render() {
    const givenClasses = this.props.classes ? this.props.classes.join(' ') : '';
    const className = givenClasses.length
      ? `${givenClasses} ${flexCol}`
      : flexCol;

    const onChange = (selected: number[]) => {
      this.props.onChange(selected);
    };

    const onDeselect = (index: number) => {
      this.props.onDeselect(index);
    };
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
        {isMobile() ? (
          <SelectMultiple
            onChange={onChange}
            options={this.state.options}
            selected={this.props.selected}
          />
        ) : (
          <SelectMultiple
            onChange={onChange}
            onClick={onDeselect}
            options={this.state.options}
            selected={this.props.selected}
          />
        )}
      </div>
    );
  }
}
