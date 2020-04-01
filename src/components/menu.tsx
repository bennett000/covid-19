import { h } from 'preact';
import { flex, styles } from '../style';
import { Button } from './input/button';
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
            classes={styles.button}
            isDisabled={i === selected || disable}
            label={label}
            onClick={() => onClick(i)}
          ></Button>
        );
      })}
    </nav>
  );
}
