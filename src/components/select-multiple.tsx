import { h } from 'preact';
import { SelectOptions } from '../interfaces';
import { isString } from '@ch1/utility';

export function SelectMultiple({
  onChange,
  options,
  selected,
}: {
  onChange: (selected: number[]) => any;
  options: SelectOptions;
  selected: number[];
}) {
  const change = e => onChange(selectedOptionsToArray(e.target.options));
  return (
    <select onChange={change} multiple={true}>
      {options.map((option, index) => {
        if (isString(option)) {
          if (selected.indexOf(index) > -1) {
            return (
              <option value={index} selected>
                {option}
              </option>
            );
          }
          return <option value={index}>{option}</option>;
        }
        if (selected.indexOf(option.index) > -1) {
          return (
            <option value={option.index} selected>
              {option.name}
            </option>
          );
        }
        return <option value={option.index}>{option.name}</option>;
      })}
    </select>
  );
}

function selectedOptionsToArray(options) {
  let results = [];
  for (let i = 0; i < options.length; i += 1) {
    const opt = options[i];
    if (opt.selected) {
      results.push(parseInt(opt.value, 10));
    }
  }
  return results;
}
