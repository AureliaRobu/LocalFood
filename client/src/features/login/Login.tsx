import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from '../../styles/styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex min-h-screen flex-col justify-center bg-lime-50 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-stone-500-800 mt-6 text-center text-3xl font-extrabold">
          Login to your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-stone-700"
              >
                Email address
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-stone-300 px-3 py-2 placeholder-stone-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  />
                </div>
              </label>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-stone-700"
              >
                Password
                <div className="relative mt-1">
                  <input
                    type={visible ? 'text' : 'password'}
                    name="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-stone-300 px-3 py-2 placeholder-stone-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
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
              </label>
            </div>
            <div className={`${styles.normalFlex} justify-between`}>
              <div className={`${styles.normalFlex}`}>
                <label
                  htmlFor="remember-me"
                  className={`${styles.normalFlex} block text-sm text-stone-900`}
                >
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="mr-2 h-4 w-4 accent-lime-500 focus:outline-none"
                  />
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href=".forgot-password"
                  className="font-medium text-lime-600 hover:text-lime-500"
                >
                  Forgot your password?
                </a>
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
              <h4>Not have an account?</h4>
              <Link
                to="/signup"
                className="pl-2 text-lime-600 hover:text-lime-700"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
