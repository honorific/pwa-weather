import axios from 'axios'

const URL = 'https://openweathermap.org/data/2.5/weather'
const API_KEY = '637babeaa1e92723e0233bcddcccde64'

export const fetchWeather = async (query) => {
  const {data} = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    },
  })
  return data
}
