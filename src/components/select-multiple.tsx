import { h } from 'preact';
import { SelectOptions } from '../interfaces';
import { isString, noop } from '@ch1/utility';

export function SelectMultiple({
  onChange,
  onClick,
  options,
  selected,
}: {
  onChange: (selected: number[]) => any;
  onClick?: (value: number) => any;
  options: SelectOptions;
  selected: number[];
}) {
  const change = e => onChange(selectedOptionsToArray(e.target.options));
  onClick = onClick || (noop as any);
  const optClick = (e: any) => onClick(parseInt(e.target.value, 10));
  return (
    <select onChange={change} multiple={true}>
      {options.map((option, index) => {
        const key = index + (Math.random() * 100000).toString(16);
        if (isString(option)) {
          if (selected.indexOf(index) > -1) {
            return (
              <option
                key={key}
                onClick={optClick}
                value={index}
                selected={true}
              >
                {option}
              </option>
            );
          }
          return (
            <option key={key} onClick={optClick} value={index}>
              {option}
            </option>
          );
        }
        if (selected.indexOf(option.index) > -1) {
          return (
            <option
              key={key}
              onClick={optClick}
              value={option.index}
              selected={true}
            >
              {option.name}
            </option>
          );
        }
        return (
          <option key={key} onClick={optClick} value={option.index}>
            {option.name}
          </option>
        );
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
