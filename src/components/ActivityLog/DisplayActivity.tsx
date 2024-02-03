import Activity from 'interface/Activity';

const DisplayActivity = (props: { activity: Activity }) => {
  return (
    <div>
      <p>{props.activity.description}</p>
      <p>{props.activity.time}</p>
    </div>
  );
};

export default DisplayActivity;
