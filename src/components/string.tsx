import { h } from 'preact';
import { noop } from '@ch1/utility';

export function InputString({
  classes,
  listenKeyUp,
  onChange,
  value,
}: {
  classes?: string[];
  listenKeyUp?: boolean;
  onChange: (str: string) => any;
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
      type="text"
      value={value}
    />
  );
}
