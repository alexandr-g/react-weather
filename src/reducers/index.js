import { combineReducers } from 'redux';
import WeatherReducer from './reducerWeather'

const rootReducer = combineReducers({
  wheather: WeatherReducer
});

export default rootReducer;
