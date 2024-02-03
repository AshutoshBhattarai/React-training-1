import UserFormData from 'interface/UserFormData';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const UserForm = () => {
  const { register, handleSubmit } = useForm<UserFormData>();

  const onFormSubmit: SubmitHandler<UserFormData> = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex justify-center gap-4"
    >
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Username</span>
        </div>
        <input
          {...register('username', { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
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
      </label>
    </form>
  );
};

export default UserForm;
