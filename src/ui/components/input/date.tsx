import { h } from 'preact';

export function InputDate({
  classes,
  onChange,
  ymdString,
}: {
  classes?: string[];
  onChange: (ymdString: string) => any;
  ymdString: string;
}) {
  const className = classes ? classes.join(' ') : ' ';
  return (
    <input
      className={className}
      onChange={(e: any) => onChange(e.target.value)}
      type="date"
      value={ymdString}
    />
  );
}
