import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import WeatherData from 'interface/WeatherData';
interface WeatherState {
  weather: WeatherData | null;
  status: 'fulfilled' | 'pending' | 'rejected';
  error: string;
}
const initialState: WeatherState = {
  weather: null,
  status: 'pending',
  error: ''
};

export const fetchWeather = createAsyncThunk(
  'fetchWeather',
  async (_id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=27.7017&longitude=85.3206&hourly=temperature_2m,apparent_temperature,rain,visibility,wind_speed_10m,wind_direction_10m&forecast_days=1'
      );
      const data = await response.json();
      return data.hourly;
    } catch (error) {
      rejectWithValue('Error No data found');
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.status = 'pending';
      state.weather = null;
      state.error = '';
    });
    builder.addCase(
      fetchWeather.rejected,
      (state, action: PayloadAction<unknown>) => {
        state.status = 'rejected';
        state.weather = null;
        state.error = action.payload as string;
      }
    );
    builder.addCase(
      fetchWeather.fulfilled,
      (state, action: PayloadAction<WeatherData>) => {
        state.status = 'fulfilled';
        state.weather = action.payload;
        state.error = '';
      }
    );
  }
});

export const selectWeatherValue = (state: RootState) => state.weather;

export default weatherSlice.reducer;
