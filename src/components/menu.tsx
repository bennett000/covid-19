import { h } from 'preact';
import { flex } from '../constants';
import { Button } from './button';
import { MenuProp } from '../interfaces';

export function Menu({
  config: { disable, labels, onClick, selected },
}: {
  config: MenuProp;
}) {
  return (
    <nav className={flex}>
      {labels.map((label, i) => {
        return (
          <Button
            isDisabled={i === selected || disable}
            label={label}
            onClick={() => onClick(i)}
          ></Button>
        );
      })}
    </nav>
  );
}
