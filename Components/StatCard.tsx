"use client";

import {Card, Color, Metric, Text} from "@tremor/react";

//there is no color option in the tremor but this is the colors they support so I have included it into the options
type Props = {
    title: string;
    metric: string;
    color?: Color;

}

function StatCard({title, metric, color}: Props) {
  return (
    <Card decoration="top" decorationColor={color}>
        <Text>{title}</Text>
        <Metric>{metric}</Metric>
      
    </Card>
  )
}

export default StatCard
