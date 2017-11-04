import React from 'react';
import Card from './Card';

export default function Hourly(props) {
  return (
    <div>
      {props.hourlyData.map((hour, hourIndex) => {
        return <Card key={hourIndex} hour={hour} />;
      })}
    </div>
  );
}
