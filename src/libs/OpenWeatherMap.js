import axios from "axios";
// Creating an instance with axios, doc: https://github.com/axios/axios
const OpenWeatherMap = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    units: "metric",
    appid: 'bf030de6be4327d1fb2c8ee006ccc5d5',
  }
})
// const get = ({path, params}) => axios.get(`https://api.openweathermap.org/data/2.5/${path}`, {
//   params: {
//     units: 'metric',
//     appid: 'bf030de6be4327d1fb2c8ee006ccc5d5',
//     ...params
//   }
// });
// const OpenWeatherMap = {
//   get,
// }

export default OpenWeatherMap;