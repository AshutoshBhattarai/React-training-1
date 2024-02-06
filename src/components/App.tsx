import { Outlet } from 'react-router-dom';
import Navbar from './common/Navbar';
import { Provider } from 'react-redux';
import store from '../app/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Outlet />
      </Provider>
    </div>
  );
}

export default App;
