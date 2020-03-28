import { h } from 'preact';

export function AboutList({
  title,
  list,
}: {
  title: string;
  list: { name: string; description: any }[];
}) {
  return (
    <section>
      <h3>{title}</h3>
      <ul>
        {list.map(d => (
          <li>
            <strong>{d.name}:</strong>&nbsp;
            {typeof d.description === 'function'
              ? d.description()
              : d.description}
          </li>
        ))}
      </ul>
    </section>
  );
}
