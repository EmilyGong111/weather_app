import OpenWeatherMap from "../../libs/OpenWeatherMap";

const get3HourForecast = (id) => OpenWeatherMap.get("forecast", {
  params: {
    id,
  }
})

//cnt limits data number returned, for example, 32 means 4 days, every day 8 weather items. 
// const get3HourForecast = (id, cnt = 32) => OpenWeatherMap.get("forecast", {
//   params: {
//     id,
//     cnt
//   }
// })
export default get3HourForecast