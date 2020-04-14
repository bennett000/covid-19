import { h } from 'preact';
import { flex, styles } from '../style';
import { Button } from './input/button';

export interface MenuProps {
  disable: boolean;
  labels: string[];
  clicked: (value: number) => any;
  selected: number;
}

export function Menu({ disable, labels, clicked, selected }: MenuProps) {
  return (
    <nav className={flex}>
      {labels.map((label, i) => {
        return (
          <Button
            classes={styles.button}
            isDisabled={i === selected || disable}
            label={label}
            onClick={() => clicked(i)}
          ></Button>
        );
      })}
    </nav>
  );
}
