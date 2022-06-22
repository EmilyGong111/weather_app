import OpenWeatherMap from '../../libs/OpenWeatherMap';

export const getWeather = (id) => OpenWeatherMap.get("weather",{
  params: {
    id: id
  }
})
// export const getWeather = (id) => OpenWeatherMap.get({path: "weather", params: {id: id}})
