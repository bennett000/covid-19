import { h } from 'preact';
import { SelectOptions } from '../interfaces';
import { isString } from '@ch1/utility';

export function Select({
  onChange,
  options,
  selected,
}: {
  onChange: (selected: number) => any;
  options: SelectOptions;
  selected: number;
}) {
  const change = e => onChange(parseInt(e.target.value, 10));
  return (
    <select onChange={change}>
      {options.map((option, index) => {
        if (isString(option)) {
          if (selected === index) {
            return (
              <option value={index} selected>
                {option}
              </option>
            );
          }
          return <option value={index}>{option}</option>;
        }
        if (selected === index) {
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
