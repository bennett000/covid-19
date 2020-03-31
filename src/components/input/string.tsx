import { h } from 'preact';
import { noop } from '@ch1/utility';

export function InputString({
  classes,
  listenKeyUp,
  onChange,
  placeholder,
  value,
}: {
  classes?: string[];
  listenKeyUp?: boolean;
  onChange: (str: string) => any;
  placeholder?: string;
  value: string;
}) {
  const classString = classes ? classes.join(' ') : '';
  const change = (e: any) => onChange(e.target.value);
  const keyUp = listenKeyUp ? change : noop;

  return (
    <input
      className={classString}
      onChange={change}
      onKeyUp={keyUp}
      placeholder={placeholder || ''}
      type="text"
      value={value}
    />
  );
}
