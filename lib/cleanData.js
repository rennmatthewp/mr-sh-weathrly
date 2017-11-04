 const cleanData = (data) => {

  const currentLocation = (data) => {
    return {
      location: {
      city: data.current_observation.display_location.city,
      state: data.current_observation.display_location.state,
      }
    }
  }

  const hourlyForecast = (data) => {
    return data.map( hour => {
     return {
       image: hour.icon_url,
       pop: hour.pop,
       temp: hour.temp.english,
       time: hour.FCTTIME.civil
     } 
    })
  }

  const dailyForecast = (data) => {
    return data.map( day => {
      return {
        condition: day.conditions,
        date: day.date.weekday,
        high: day.high.fahrenheit,
        image: day.icon_url,
        low: day.low.fahrenheit,
        pop: day.pop
      }
    })
  }

  const currentObservation = (data) => {
    return {
    condition: data.current_observation.weather,
    date: data.current_observation.observation_time,
    high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    summary: data.forecast.txt_forecast.forecastday[0].fcttext,
    temp: data.current_observation.temp_f
    }
  }

  return {
    location: currentLocation(data),
    currentObservation: currentObservation(data),
    hourlyForecast: hourlyForecast(data.hourly_forecast),
    dailyForecast: dailyForecast(data.forecast.simpleforecast.forecastday)
  }
}

export default cleanData;