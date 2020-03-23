import { h } from 'preact';
import { flex } from '../constants';
import { Button } from './button';
import { MenuProp } from '../interfaces';

export function Menu({
  config: { onClick, labels, selected },
}: {
  config: MenuProp;
}) {
  return (
    <nav className={flex}>
      {labels.map((label, i) => {
        return (
          <Button
            isDisabled={i === selected}
            label={label}
            onClick={() => onClick(i)}
          ></Button>
        );
      })}
    </nav>
  );
}
