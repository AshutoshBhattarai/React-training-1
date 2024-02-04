import { zodResolver } from '@hookform/resolvers/zod';
import Activity from 'interface/Activity';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const activitySchema = z.object({
  description: z.string().min(1, {
    message: 'Please enter a description'
  }),

  time: z.coerce
    .number()
    .min(1, {
      message: 'Please enter time in minutes'
    })
    .max(1440, { message: 'Time cannot be more than 24 hours(1440) minutes' })
});

const ActivityForm = (props: {
  addNewActivity: (activity: Activity) => void;
}) => {
  const {
    register,
    handleSubmit,
    reset: formReset,
    formState: { errors: formErrors }
  } = useForm<Activity>({
    resolver: zodResolver(activitySchema)
  });

  const onFormSubmit: SubmitHandler<Activity> = (data: Activity) => {
    props.addNewActivity(data);

    formReset();
  };

  const displayErrorMessage = (message: string) => {
    return (
      <div className="label">
        <span className="label-text-alt text-red-500">{message}</span>
      </div>
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex justify-start gap-4 px-6 py-3"
    >
      <div className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Enter Description</span>
        </div>
        <input
          {...register('description', { required: true })}
          className="input input-bordered w-full max-w-xs"
        />

        {formErrors.description &&
          displayErrorMessage(formErrors.description.message!)}
      </div>

      <div className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Enter Time(in minutes)</span>
        </div>
        <input
          type="number"
          {...register('time', { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
        {formErrors.time && displayErrorMessage(formErrors.time.message!)}
      </div>

      <div className="flex items-end">
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default ActivityForm;
