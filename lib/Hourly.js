import React from 'react';

export default function Hourly(props) {
  return (
    <div>
      {props.hourlyData.map( (hour) =>{
        return(
          <div>
            <h1>{hour.temp}</h1>
            <img src={hour.img}></img>
          </div>
        )
      })
      }
    </div>
  );
}

