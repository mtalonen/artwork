import type { NextPage } from 'next'

import styled from 'styled-components';
import {
  ScatterChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  ZAxis,
  Scatter,
  Tooltip,
  Label
} from 'recharts';

import energyData from './2021-energy.json';
import temperatureData from './2021-temperature.json';

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0%;
  font-family: sans-serif;
  `;


const combineAndFormatData = (energyData: any, temperatureData: any) => {
  const data = energyData.reduce((acc: any, {
    year,
    month,
    day,
    hour,
    timestamp,
    values: { "EL_ENERGY_CONSUMPTION#0": { value } }
  }: any) => {
    const key = [year, month, day, hour].join('-');
    acc[key] = { energy: value, hour, timestamp }
    return acc;
  }, {});

  temperatureData.forEach(({
    year,
    month,
    day,
    hour,
    values: { "WEATHER_TEMPERATURE#0": { value } }
  }: any) => {
    const date = [year, month, day, hour].join('-');
    data[date].temp = value;
  });

  return Object.values(data);

}

const data = combineAndFormatData(energyData, temperatureData)
const pickHours = (data: any, hours: any) => data.filter(({ hour }: any) => hours.includes(hour));

const hour2 = pickHours(data, [3, 4, 5])

const Home: NextPage = () => {
  return (
    <Content>
      <ResponsiveContainer>
        <ScatterChart width={1200} height={800}
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}>
          <XAxis label="Temperature" type="number" dataKey="temp" name="Temperature" unit="°C" domain={[-25, 25]} />
          <YAxis dataKey="energy" name="Energy consumption" unit="kWh" domain={[0, 10]} >
            <Label angle={-90} position="left">Energy consumption</Label>
          </YAxis>
          <ZAxis dataKey="timestamp" name="Date" />
          <Scatter data={hour2} fillOpacity={.3} />
          <Tooltip />
        </ScatterChart>
      </ResponsiveContainer>
    </Content>
  )
}

export default Home
