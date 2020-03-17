import { h } from 'preact';
import { Button } from './button';

export function ButtonToggle({
  isDisabled,
  labelFalse,
  labelTrue,
  onClick,
  state,
}: {
  isDisabled?: boolean;
  labelFalse: string;
  labelTrue: string;
  onClick: (state: boolean) => any;
  state: boolean;
}) {
  return (
    <Button
      isDisabled={isDisabled}
      label={state ? labelTrue : labelFalse}
      onClick={() => onClick(state ? false : true)}
    ></Button>
  );
}
