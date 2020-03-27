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
  filter: string;
  onChange: (selected: any[]) => any;
  onClear: () => any;
  onDeselect: (index: number | string) => any;
  onUpdateFilter: () => any;
  options: SelectOptions;
  selected: any[];
};

export class SelectMultipleFilter extends Component<SelectMultipleFilterProps> {
  constructor() {
    super();
  }

  getOptions() {
    if (this.props.filter) {
      return this.props.options.filter(option => {
        if (isString(option)) {
          if (
            option.toLowerCase().indexOf(this.props.filter.toLowerCase()) > -1
          ) {
            return true;
          }
          return false;
        } else {
          if (
            option.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) >
            -1
          ) {
            return true;
          }
          return false;
        }
      });
    } else {
      return this.props.options;
    }
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
              onChange={this.props.onUpdateFilter.bind(this)}
              placeholder="filter"
              value={this.props.filter}
            />
          )}
          <Button label="✗" onClick={this.props.onClear}></Button>
        </div>
        {isMobile() ? (
          <SelectMultiple
            onChange={onChange}
            options={this.getOptions()}
            selected={this.props.selected}
          />
        ) : (
          <SelectMultiple
            onChange={onChange}
            onClick={onDeselect}
            options={this.getOptions()}
            selected={this.props.selected}
          />
        )}
      </div>
    );
  }
}
