import OpenWeatherMap from '../../libs/OpenWeatherMap';
// use the get object method from a axios created object to get the baseURL with the path "group", and the params.
export const getWeathers = (ids) => OpenWeatherMap.get("group", {
  // path will join into the baseURL, and prams will join into the params in the OpenWeatherMap obj created by axios.
  params: {
    id: ids.join()
  }
})

// export const getWeathers = (ids) => OpenWeatherMap.get({path:"group", pramas: {id: ids.join()}})