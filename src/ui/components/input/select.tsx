import { h } from 'preact';
import { SelectOptions } from '../../../interfaces';
import { isString } from '@ch1/utility';

export function Select({
  classes,
  onChange,
  options,
  selected,
}: {
  classes?: string[];
  onChange: (selected: number | string) => any;
  options: SelectOptions;
  selected: number | string;
}) {
  const change = e => onChange(e.target.value);
  const className = classes ? classes.join(' ') : '';
  return (
    <select className={className} onChange={change}>
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
