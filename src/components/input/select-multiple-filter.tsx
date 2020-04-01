import { h } from 'preact';
import { SelectOptions } from '../../interfaces';
import { InputString } from './string';
import { SelectMultiple } from './select-multiple';
import { flexCol, flex } from '../../style';
import { isString, noop } from '@ch1/utility';
import { Button } from './button';
import { isMobile } from '../../utility';

type SelectMultipleFilterProps = {
  classes?: string[];
  filter: string;
  inputSelectClasses?: string[];
  inputStringClasses?: string[];
  inputButtonClasses?: string[];
  onChange: (selected: any[]) => any;
  onClear: () => any;
  onDeselect: (index: number | string) => any;
  onUpdateFilter: (filter: string) => any;
  options: SelectOptions;
  selected: any[];
};

function getOptions(props: SelectMultipleFilterProps) {
  if (props.filter) {
    return props.options.filter(option => {
      if (isString(option)) {
        if (option.toLowerCase().indexOf(props.filter.toLowerCase()) > -1) {
          return true;
        }
        return false;
      } else {
        if (
          option.name.toLowerCase().indexOf(props.filter.toLowerCase()) > -1
        ) {
          return true;
        }
        return false;
      }
    });
  } else {
    return props.options;
  }
}

export function SelectMultipleFilter(props: SelectMultipleFilterProps) {
  const givenClasses = props.classes ? props.classes.join(' ') : '';
  const className = givenClasses.length
    ? `${givenClasses} ${flexCol}`
    : flexCol;

  const onChange = (selected: number[]) => {
    props.onChange(selected);
  };

  const onDeselect = (index: number) => {
    props.onDeselect(index);
  };

  return (
    <div className={className}>
      <div className={flex}>
        {isMobile() ? (
          ''
        ) : (
          <InputString
            classes={props.inputStringClasses}
            listenKeyUp={true}
            onChange={props.onUpdateFilter}
            placeholder="filter"
            value={props.filter}
          />
        )}
        <Button
          classes={props.inputButtonClasses}
          label="✗"
          onClick={props.onClear}
        ></Button>
      </div>
      {isMobile() ? (
        <SelectMultiple
          classes={props.inputSelectClasses}
          onChange={onChange}
          options={getOptions(props)}
          selected={props.selected}
        />
      ) : (
        <SelectMultiple
          classes={props.inputSelectClasses}
          onChange={noop}
          onClick={onDeselect}
          options={getOptions(props)}
          selected={props.selected}
        />
      )}
    </div>
  );
}
