import axios from 'axios'
import { FETCH_WEATHER } from '../constants/index'

const API_KEY = '76bee544252a19d52ab08de63c605725'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  return {
    type: 'FETCH_WEATHER',
    payload: request
  }
}
