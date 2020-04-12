import { h } from 'preact';
import { InputNumber } from './input/number';
import { width2em, styles } from '../style';
import { camelProp, SeirProps } from '../containers/seir/seir.state';

export function InputSeir(props: SeirProps) {
  const { seirInput } = props.strings;
  const gt0 = (n: number) => (n < 0 ? 0 : n);
  const percent = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);
  const data = [
    [
      {
        prop: 'r0',
        filter: (n: number) => (n >= 0 && n < 30 ? n : 2.2),
        unit: '',
        decimals: true,
      },
      {
        prop: 'incubationPeriod',
        filter: gt0,
        unit: seirInput.unitDays,
        decimals: false,
      },
      { prop: 'fatalityRate', filter: percent, unit: '%', decimals: true },
      {
        prop: 'lengthOfSevereHospitalStay',
        filter: gt0,
        unit: seirInput.unitDays,
        decimals: false,
      },
      {
        prop: 'hospitalizationRate',
        filter: percent,
        unit: '%',
        decimals: true,
      },
    ],
    [
      { prop: 'daysToProject', filter: gt0, unit: '', decimals: false },
      {
        prop: 'durationOfInfection',
        filter: gt0,
        unit: seirInput.unitDays,
        decimals: false,
      },
      {
        prop: 'timeFromIncubationToDeath',
        filter: gt0,
        unit: seirInput.unitDays,
        decimals: false,
      },
      {
        prop: 'recoveryTimeForMildCases',
        filter: gt0,
        unit: seirInput.unitDays,
        decimals: false,
      },
      {
        prop: 'timeFromIncubationToHospital',
        filter: gt0,
        unit: seirInput.unitDays,
        decimals: false,
      },
    ],
  ];
  return (
    <table>
      {data.map(row => (
        <tbody>
          {[undefined, undefined].map((_, i) => (
            <tr>
              {row.map(cell => {
                if (cell.prop === '') {
                  return <td></td>;
                }
                return i === 0 ? (
                  <th>{seirInput[cell.prop]}</th>
                ) : (
                  <td style="text-align: center">
                    <InputNumber
                      classes={styles.input.concat([width2em])}
                      value={props[cell.prop]}
                      onChange={(n: number) =>
                        props[camelProp(cell.prop)](cell.filter(n))
                      }
                      placeholder={seirInput[cell.prop]}
                      useDecimals={cell.decimals}
                    ></InputNumber>
                    &nbsp;{cell.unit}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      ))}
    </table>
  );
}
