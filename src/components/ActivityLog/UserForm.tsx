import { zodResolver } from '@hookform/resolvers/zod';
import UserFormData from 'interface/UserFormData';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const userFormSchema = z.object({
  username: z.string().min(1, {
    message: 'Please enter your name'
  }),

  age: z.coerce // Coerce is to convert input generated string to a number
    .number()
    .min(1, {
      message: 'Please enter your correct age'
    })
    .max(100, {
      message: 'Please enter your correct age '
    }),

  contactNumber: z.coerce
    .string()
    .regex(new RegExp(/^9\d{9}$/), 'Please Enter Valid Number') // Number must start with 9 and should contain exactly 10 digits
});

const UserForm = (props: { setUserData: (data: UserFormData) => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors }
  } = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
    mode: 'onTouched' // shows validation after the input field are selected/touched
  });

  const displayErrorMessage = (message: string) => {
    return (
      <div className="label">
        <span className="label-text-alt text-red-500">{message}</span>
      </div>
    );
  };

  const onFormSubmit: SubmitHandler<UserFormData> = (data: UserFormData) => {
    props.setUserData(data);
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex justify-start gap-4 px-6 py-3"
    >
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Username</span>
        </div>
        <input
          {...register('username', { required: true })}
          className="input input-bordered w-full max-w-xs"
        />

        {formErrors.username &&
          displayErrorMessage(formErrors.username.message!)}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Age</span>
        </div>
        <input
          type="number"
          {...register('age', { required: true })}
          className="input input-bordered w-full max-w-xs"
        />

        {formErrors.age && displayErrorMessage(formErrors.age.message!)}
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Contact Number</span>
        </div>
        <input
          type="number"
          {...register('contactNumber', { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
        {formErrors.contactNumber &&
          displayErrorMessage(formErrors.contactNumber.message!)}
      </label>
    </form>
  );
};

export default UserForm;
