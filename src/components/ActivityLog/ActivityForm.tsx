import Activity from 'interface/Activity';
import { SubmitHandler, useForm } from 'react-hook-form';

const ActivityForm = (props: {
  addNewActivity: (activity: Activity) => void;
}) => {
  const { register, handleSubmit } = useForm<Activity>();
  const onFormSubmit: SubmitHandler<Activity> = (data) => {
    props.addNewActivity(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Enter Description</span>
        </div>
        <input
          {...register('description', { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Enter Time</span>
        </div>
        <input
          type="number"
          {...register('time', { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ActivityForm;
