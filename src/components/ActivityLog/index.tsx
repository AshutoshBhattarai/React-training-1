import { useState } from 'react';
import ActivityForm from './ActivityForm';
import DisplayActivity from './DisplayActivity';
import Activity from 'interface/Activity';
import UserForm from './UserForm';

const ActivityLog = () => {
  const [activity, setActivity] = useState<Activity[]>([]);

  const addNewActivity = (data: Activity) => {
    setActivity([...activity, data]);
  };
  return (
    <div className="w-4/5 mx-auto mt-7">
      <h1>ActivityLog</h1>
      <div className="artboard artboard-horizontal">
        <UserForm />
        <ActivityForm addNewActivity={addNewActivity} />
        {activity ? (
          activity.map((item) => {
            return <DisplayActivity key={item.time} activity={item} />;
          })
        ) : (
          <p>No Activities Found</p>
        )}
      </div>
    </div>
  );
};

export default ActivityLog;
