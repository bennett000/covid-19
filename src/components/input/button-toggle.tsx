import { h } from 'preact';
import { Button } from './button';

export function ButtonToggle({
  classes,
  isDisabled,
  labelFalse,
  labelTrue,
  onClick,
  state,
}: {
  classes?: string[];
  isDisabled?: boolean;
  labelFalse: string;
  labelTrue: string;
  onClick: (state: boolean) => any;
  state: boolean;
}) {
  return (
    <Button
      classes={classes}
      isDisabled={isDisabled}
      label={state ? labelTrue : labelFalse}
      onClick={() => onClick(state ? false : true)}
    ></Button>
  );
}
