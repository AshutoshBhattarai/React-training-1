import ActivityLog from 'components/ActivityLog';
import App from 'components/App';
import CountDownTimer2 from 'components/CountDownTimer/CountDownTimer2';
import DemoPage from 'components/Demo';
import UserProfile from 'components/UserProfiles/UserProfile';
import WeatherAPI from 'components/WeatherAPI';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <>
            <h1>Welcome to the Home Page</h1>
          </>
        )
      },
      {
        path: 'countdown',
        element: <CountDownTimer2 />
      },
      {
        path: 'userprofile',
        element: <UserProfile />
      },
      {
        path: 'weather',
        element: <WeatherAPI />,
        loader: async ({request}) => {
          console.log(request);
          return fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=27.7017&longitude=85.3206&hourly=temperature_2m,apparent_temperature,rain,visibility,wind_speed_10m,wind_direction_10m&forecast_days=1'
          );
        }
      },
      {
        path: 'activitylog',
        element: <ActivityLog />
      },
      {
        path: 'demo',
        element: <DemoPage />
      }
    ]
  }
]);
export default router;
