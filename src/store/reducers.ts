import { reducer as weatherReducer } from '../Features/Weather/reducer';
import { reducer as metricsReducer } from '../Features/Metrics/reducer';
import { reducer as chartReducer } from '../Features/Chart/reducer';

export default {
  weather: weatherReducer,  // Weather Reducer
  metrics: metricsReducer,  // Metrics Reducer
  chart: chartReducer,  // Chart Reducer
};
