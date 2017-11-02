import React from 'react';
import Card from './Card';

export default function Hourly(props) {
  return (
    <div>
      {props.hourlyData.map( (hour, index) =>{
        return(
          <Card key={index} hour={hour} />
        )
      })
      }
    </div>
  );
}

