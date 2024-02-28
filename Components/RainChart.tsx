'use client';

import {Card, AreaChart, Title} from '@tremor/react';
import { time } from 'console';

type Props = {
    results: Root;
};


function RainChart({results}: Props) {
  //We have converted the time array and took the first 24 hours of the array
  //The first 24 elements represents the 24 hours of the current day (we took for the 5 days)
  const hourly = results?.hourly.time.map((time) => 
      new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false,
  }).slice(0,24)
  );

  const data = hourly.map((hour,i) => ({
    time: Number(hour),
    "Rain (%)": results.hourly.precipitation_probability[i],
  }))

  const dataFormatter = (number: number) => `${number} %`;


  return (
    <Card>
      <Title>Chances of Rain</Title>
      <AreaChart
          className='mt-6'
          data={data}
          showLegend
          index="time"
          categories={["Rain (%)"]}
          colors={["blue"]}
          minValue={0}
          maxValue={100}
          valueFormatter={dataFormatter}
          yAxisWidth={40}

      />
    </Card>
  )
}

export default RainChart
