import React from 'react';
import Card from './Card';

export default function Hourly(props) {
  return (
    <div>
      <h1>Hourly Forecast</h1>
      {
        props.hourlyData.map( (hour, hourIndex) => {
          return <Card 
            key={hourIndex}
            hour={hour.time}
            image={hour.image}
            temp={hour.temp}
            pop={hour.pop}
          />
        })
      }
    </div>
  );
}
