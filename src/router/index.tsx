import ActivityLog from 'components/ActivityLog';
import App from 'components/App';
import { CountDownTimer } from 'components/CountDownTimer';
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
        element: <CountDownTimer />
      },
      {
        path: 'userprofile',
        element: <UserProfile />
      },
      {
        path: 'weather',
        element: <WeatherAPI />
      },
      {
        path: 'activitylog',
        element: <ActivityLog />
      }
    ]
  }
]);
export default router;
