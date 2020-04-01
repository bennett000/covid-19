import { h } from 'preact';
import { noop } from '@ch1/utility';

export function InputNumber({
  classes,
  listenKeyUp,
  onChange,
  placeholder,
  useDecimals,
  value,
}: {
  classes?: string[];
  listenKeyUp?: boolean;
  onChange: (str: number) => any;
  placeholder?: string;
  useDecimals?: boolean;
  value: number;
}) {
  const parse = useDecimals
    ? (thing: any) => parseFloat(thing + '')
    : (thing: any) => parseInt(thing + '', 10);

  if (!useDecimals) {
    value = parseInt(value + '', 10);
  }

  const classString = classes ? classes.join(' ') : '';
  const change = (e: any) => onChange(parse(e.target.value));
  const keyUp = listenKeyUp ? change : noop;

  const pattern = useDecimals ? '[0-9]*(.[0-9]*)' : '[0-9]*';

  return (
    <input
      className={classString}
      onChange={change}
      onKeyUp={keyUp}
      pattern={pattern}
      placeholder={placeholder || ''}
      type="text"
      value={value}
    />
  );
}
