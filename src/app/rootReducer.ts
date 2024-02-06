import { combineReducers } from 'redux';
import counterReducer from '../components/Demo/Redux/counterSlice';
import timerSlice from 'feature/countdownTimer/timerSlice';
import weatherSlice from 'feature/weather/weatherSlice';

export const rootReducer = combineReducers({
  counter: counterReducer,
  timer: timerSlice,
  weather: weatherSlice
});
