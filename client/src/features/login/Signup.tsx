import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx';
import { useForm } from 'react-hook-form';
import styles from '../../styles/styles';
import useCreateUser from '../users/useCreateUser';
import FormRow from '../../ui/FormRow';

function Signup() {
  const [visible, setVisible] = useState(false);
  const { register, handleSubmit, reset, watch, formState } = useForm();
  const { errors } = formState;
  const { isCreating, createUser } = useCreateUser();
  let avatar;
  if (watch('file')) {
    [avatar] = watch('file');
  }

  function onSubmit(data) {
    const user = new FormData();
    user.append('file', data.file[0]);
    user.append('name', data.name);
    user.append('email', data.email);
    user.append('password', data.password);
    createUser(user, {
      onSettled: () => reset(),
    });
  }
  return (
    <div className="flex min-h-screen flex-col justify-center bg-lime-50 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-stone-500-800 mt-6 text-center text-3xl font-extrabold">
          Register as a new user
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <FormRow label="Full name" error={errors?.name?.message}>
              <div className="mt-1">
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  className="block w-full appearance-none rounded-md border border-stone-300 px-3 py-2 placeholder-stone-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  disabled={isCreating}
                  {...register('name', {
                    required: 'This field is required',
                  })}
                />
              </div>
            </FormRow>
            <FormRow label="Email address" error={errors?.email?.message}>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full appearance-none rounded-md border border-stone-300 px-3 py-2 placeholder-stone-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  disabled={isCreating}
                  {...register('email', {
                    required: 'This field is required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Please provide a valid email address',
                    },
                  })}
                />
              </div>
            </FormRow>
            <FormRow
              label="Password (min 8 characters)"
              error={errors?.password?.message}
            >
              <div className="relative mt-1">
                <input
                  type={visible ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  className="block w-full appearance-none rounded-md border border-stone-300 px-3 py-2 placeholder-stone-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  disabled={isCreating}
                  {...register('password', {
                    required: 'This field is required',
                    minLength: {
                      value: 8,
                      message: 'Password needs a minimum of 8 characters',
                    },
                  })}
                />
                {!visible ? (
                  <FontAwesomeIcon
                    icon={faEye}
                    className="absolute right-2 top-2 cursor-pointer"
                    onClick={() => setVisible(true)}
                    size="lg"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className="absolute right-2 top-2 cursor-pointer"
                    onClick={() => setVisible(false)}
                    size="lg"
                  />
                )}
              </div>
            </FormRow>
            <div>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 overflow-hidden rounded-full">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full rounded-full object-cover"
                      id="avatar"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center rounded-md border border-lime-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm hover:bg-lime-50"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    className="sr-only"
                    {...register('file', {
                      required: 'This field is required',
                    })}
                  />
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex h-[40px] w-full justify-center rounded-md border border-transparent bg-lime-600 px-4 py-2 text-sm font-medium text-white hover:bg-lime-700"
              >
                Submit
              </button>
            </div>
            <div className={`${styles.normalFlex} w-full`}>
              <h4>Already have an account?</h4>
              <Link
                to="/login"
                className="pl-2 text-lime-600 hover:text-lime-700"
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
