//eslint-disable-next-line newline-after-var
const filterData = data => {
  
  let {
    current_observation,
    current_observation: { display_location },
    hourly_forecast,
    forecast: { simpleforecast: { forecastday }, txt_forecast }
  } = data;

  const location = data => {

    let { city, state } = display_location;

    return {city, state};
    // return {
    //   city: city,
    //   state: state
    // };
  };

  const hourlyForecast = data => {
    return data.map(hour => {
      return {
        image: hour.icon_url,
        pop: hour.pop,
        temp: hour.temp.english,
        time: hour.FCTTIME.civil
      };
    });
  };

  const dailyForecast = data => {
    return data.map(day => {
      return {
        condition: day.conditions,
        date: day.date.weekday,
        high: day.high.fahrenheit,
        image: day.icon_url,
        low: day.low.fahrenheit,
        pop: day.pop
      };
    });
  };

  const currentObservation = data => {
    let { weather, observation_time, temp_f } = current_observation;

    return {
      condition: weather,
      date: observation_time,
      high: forecastday[0].high.fahrenheit,
      low: forecastday[0].low.fahrenheit,
      summary: txt_forecast.forecastday[0].fcttext,
      temp: temp_f
    };
  };

  return {
    location: location(data),
    currentObservation: currentObservation(data),
    hourlyForecast: hourlyForecast(hourly_forecast),
    dailyForecast: dailyForecast(forecastday)
  };
};


export default filterData;