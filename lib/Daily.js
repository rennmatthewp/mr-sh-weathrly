import React from 'react';
import Card from './Card';

export default function Daily(props) {
  return (
    <div>
      <h1>Daily Forecast</h1>
      {
        props.dailyData.map( (day, dayIndex) => {
          return <Card 
          key={dayIndex} 
          day={day.date}
          condition={day.condition}
          image={day.image}
          pop={day.pop}
          high={day.high}
          low={day.low} 
        />
        })
      }
    </div>
  );
}
