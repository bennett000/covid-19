import { Component, h } from 'preact';
import {
  LineGraphState,
  ChartSeries,
  SelectOptionsWithIndex,
} from '../interfaces';
import { Chart } from '../components/chart';
import { Select } from '../components/select';
import { SelectMultiple } from '../components/select-multiple';
import { flex, flexCol, fullSize, flexItem20, flexItem60 } from '../constants';
import { InputDate } from '../components/date';
import { Button } from '../components/button';

const dataSets = ['Active', 'Confirmed', 'Deaths', 'Recoveries'];
const modes = ['By date', 'By first confirmed', 'By first 100 confirmed'];
const scaleTypes = ['Linear', 'Logarithmic'];
export class LineGraph extends Component<{
  countries: SelectOptionsWithIndex[];
  currentSeries: ChartSeries[];
  onChange: (lgs: LineGraphState) => any;
  reload: () => any;
  state: LineGraphState;
}> {
  selectMode(mode: number) {
    this.props.onChange({
      ...this.props.state,
      mode,
    });
  }

  selectDate(ymdString: string) {
    this.props.onChange({
      ...this.props.state,
      startDate: ymdString,
    });
  }

  selectDataSets(dataSetIndexes: number[]) {
    this.props.onChange({
      ...this.props.state,
      dataSetIndexes,
    });
  }

  selectCountries(countryIndexes: number[]) {
    this.props.onChange({
      ...this.props.state,
      countryIndexes,
    });
  }

  selectScaleType(scaleType: number) {
    this.props.onChange({
      ...this.props.state,
      scaleType,
    });
  }

  useDays() {
    if (this.props.state.mode !== 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <section className={`${fullSize} ${flexCol}`}>
        <Chart
          flexSize={flexItem60}
          series={this.props.currentSeries}
          scaleType={this.props.state.scaleType}
          useDays={this.useDays()}
        ></Chart>
        <section className={`${flex} ${flexItem20}`}>
          <section className={flexCol}>
            <Select
              onChange={this.selectMode.bind(this)}
              options={modes}
              selected={this.props.state.mode}
            />
            <Select
              onChange={this.selectScaleType.bind(this)}
              options={scaleTypes}
              selected={this.props.state.scaleType}
            />
          </section>
          <InputDate
            onChange={this.selectDate.bind(this)}
            ymdString={this.props.state.startDate}
          />
          <SelectMultiple
            onChange={this.selectDataSets.bind(this)}
            options={dataSets}
            selected={this.props.state.dataSetIndexes}
          />
          <SelectMultiple
            onChange={this.selectCountries.bind(this)}
            options={this.props.countries}
            selected={this.props.state.countryIndexes}
          />
          <Button
            classes={['green']}
            label="Reload"
            onClick={this.props.reload}
          ></Button>
        </section>
      </section>
    );
  }
}
