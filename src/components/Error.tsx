
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Oops! Page not found.</h1>
      <p className="text-lg text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 underline">Go to Home Page</Link>
    </div>
    </>
  );
};

export default Error;
