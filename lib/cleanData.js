export const location = display_location => {
  
  let { city, state } = display_location;

  return {city, state};
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

const currentObservation = (current_observation, forecastday, txt_forecast) => {
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

const filterData = data => {

  let {
    current_observation,
    current_observation: { display_location },
    hourly_forecast,
    forecast: { simpleforecast: { forecastday }, txt_forecast }
  } = data;

  return {
    location: location(display_location),
    currentObservation: currentObservation(
      current_observation,
      forecastday,
      txt_forecast
    ),
    hourlyForecast: hourlyForecast(hourly_forecast),
    dailyForecast: dailyForecast(forecastday)
  };
};

export default filterData;
