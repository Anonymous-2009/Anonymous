import Navbar from './Navbar';
import Footer from './Footer';
import { useForm } from 'react-hook-form';

const Login = () => {
  // Form handling using react-hook-form
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data); // Log form data
    reset(); // Reset the form after submission
  };

  return (
    <>
      <Navbar />
      {/* Login form */}
      <div className="bg-gray-100 h-30 flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-6">
          {/* Username input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
              type="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Username"
              {...register('username', { required: true, minLength: 3, maxLength: 15 })}
            />
          </div>
          {/* Password input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
              {...register('password', { required: true, minLength: 8, maxLength: 20 })}
            />
          </div>
          {/* Form submission buttons */}
          <div className="flex items-center justify-between">
            {/* Submit button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            {/* Reset button */}
            <button
              type="reset"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={isSubmitting}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;