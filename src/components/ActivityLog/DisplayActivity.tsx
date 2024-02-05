import Activity from 'interface/Activity';

const DisplayActivity = (props: { activity: Activity }) => {
  const { description, time } = props.activity;
  return (
    <div className="flex items-center justify-between rounded-md">
      <p className="basis-10/12 text-lg">{description}</p>
      <p className="text-lg">
        {Math.round(time / 60)}h : {(time % 60).toString().padStart(2, '0')} m
      </p>
    </div>
  );
};

export default DisplayActivity;
