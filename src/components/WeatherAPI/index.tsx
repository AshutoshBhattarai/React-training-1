import { fetchWeather, selectWeatherValue } from 'feature/weather/weatherSlice';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import { useEffect } from 'react';

// const WEATHER_API_URL =
//   'https://api.open-meteo.com/v1/forecast?latitude=27.7017&longitude=85.3206&hourly=temperature_2m,apparent_temperature,rain,visibility,wind_speed_10m,wind_direction_10m&forecast_days=1';

const WeatherAPI = () => {
  //Using Loader from react router
  // const weatherData = useLoaderData();
  // const weather: WeatherData = weatherData.hourly;
  const { weather } = useAppSelector(selectWeatherValue);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchWeather());
  }, []);

  return (
    <div className="container m-10 mx-auto my-0 bg-white p-6">
      <h1 className="text-4xl text-black">View Your Weather</h1>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Todays Weather</h2>

          {weather ? (
            <>
              <p>Rain Probability : {weather.rain[1]}%</p>
              <p>Temperature : {weather.temperature_2m[1]}C</p>
              <p>Time : {weather.time[1].substring(12, 16)}</p>
              <p>Wind Direction : {weather.wind_direction_10m[1]}</p>
              <p>Wind Speed : {weather.wind_speed_10m[1]}km/h</p>
            </>
          ) : (
            <p>No Data Found ?</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherAPI;
