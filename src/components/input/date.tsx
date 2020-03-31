import { h } from 'preact';

export function InputDate({
  onChange,
  ymdString,
}: {
  onChange: (ymdString: string) => any;
  ymdString: string;
}) {
  return (
    <input
      onChange={(e: any) => onChange(e.target.value)}
      type="date"
      value={ymdString}
    />
  );
}
