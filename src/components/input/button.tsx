import { h } from 'preact';

export function Button({
  classes,
  isDisabled,
  label,
  onClick,
}: {
  classes?: string[];
  isDisabled?: boolean;
  label: string;
  onClick: () => any;
}) {
  const classString = classes ? classes.join(' ') : '';
  return (
    <button className={classString} onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  );
}
