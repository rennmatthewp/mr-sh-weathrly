import React from 'react';
import Card from './Card';

export default function Daily(props) {
  return (
    <div>
      {props.dailyData.map((day, dayIndex) => {
        return <Card key={dayIndex} day={day} />
      })}
    </div>
  );
}
