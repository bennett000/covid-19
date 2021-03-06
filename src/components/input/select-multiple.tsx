import { h } from 'preact';
import { SelectOptions } from '../../interfaces';
import { isString, noop } from '@ch1/utility';

export function SelectMultiple({
  classes,
  onChange,
  onClick,
  options,
  selected,
}: {
  classes?: string[];
  onChange: (selected: any[]) => any;
  onClick?: (value: number | string) => any;
  options: SelectOptions;
  selected: any[];
}) {
  const className = classes ? classes.join(' ') : '';
  const change = e => onChange(selectedOptionsToArray(e.target.options));
  onClick = onClick || (noop as any);
  const optClick = (e: any) => onClick(e.target.value);
  return (
    <select className={className} onChange={change} multiple={true}>
      {options.map((option, index) => {
        const key = 'option-' + option;
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
      results.push(opt.value);
    }
  }
  return results;
}
