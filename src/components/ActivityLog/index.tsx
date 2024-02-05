import Activity from 'interface/Activity';
import UserFormData from 'interface/UserFormData';
import { useState } from 'react';
import ActivityForm from './ActivityForm';
import DisplayActivity from './DisplayActivity';
import UserForm from './UserForm';

const ActivityLog = () => {
  const [activity, setActivity] = useState<Activity[]>([]);
  const [userData, setUserData] = useState<UserFormData>();

  const addNewActivity = (data: Activity) => {
    setActivity([...activity, data]);
  };

  const addUserData = (data: UserFormData) => {
    setUserData(data);
  };

  return (
    <div className="mx-auto mt-7 w-4/5">
      <h1 className="text-center text-4xl text-blue-400">ActivityLog</h1>
      <div className="artboard artboard-horizontal">
        <UserForm setUserData={addUserData} />

        <ActivityForm addNewActivity={addNewActivity} />

        <div className="m-6 rounded-3xl border border-transparent bg-gray-700 p-6">
          {activity.length > 0 ? (
            activity.map((item, index) => {
              return <DisplayActivity key={index} activity={item} />;
            })
          ) : (
            <p>No Activities Found</p>
          )}
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => {
              console.log('UserData', userData);
              console.log('Activities', activity);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
