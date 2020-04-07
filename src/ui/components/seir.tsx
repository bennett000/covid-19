import { h } from 'preact';
import { InputNumber } from './input/number';
import { InputSeirState } from '../../interfaces';
import { Strings } from '../../i18n';
import {
  width2em,
  padding,
  styles,
  tableBorderCollapse,
  displayBlock,
  flex,
  textAlignLeft,
} from '../style';
import { noop } from '@ch1/utility';

export interface InputSeirProps {
  onChange: (state: InputSeirState) => any;
  state: InputSeirState;
  strings: Strings;
}

export function InputSeir({ onChange, state, strings }: InputSeirProps) {
  const { seirInput } = strings;
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
                      value={state[cell.prop]}
                      onChange={(n: number) => {
                        onChange({
                          ...state,
                          [cell.prop]: cell.filter(n),
                        });
                      }}
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
