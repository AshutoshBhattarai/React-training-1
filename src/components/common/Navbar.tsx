import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-gray-700">
      <nav>
        <Link to={'/'} className="text-md btn btn-ghost">
          Home
        </Link>
        <div className="tooltip tooltip-bottom" data-tip="Day 2">
          <Link to={'countdown'} className="text-md btn btn-ghost">
            Countdown
          </Link>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Day 3">
          <Link to={'userprofile'} className="text-md btn btn-ghost">
            UserProfile
          </Link>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Day 3">
          <Link to={'weather'} className="text-md btn btn-ghost">
            Weather
          </Link>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Day 4">
          <Link to={'activitylog'} className="text-md btn btn-ghost">
            ActivityLog
          </Link>
        </div>
        <Link to={'demo'} className="text-md btn btn-ghost">
          Demos
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
