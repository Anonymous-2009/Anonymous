
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';

const login = () => {

  const [form, setForm] = useState({
    username:"",password:""
  });
  
  const handleSubmit = (event) => {
   event.preventDefault(); 
   setForm({...form, username:event.target.username.value,
password:event.target.password.value});
  console.log(form);
  handleReset();
  };

  const handleChange = (event) => {
  // setForm(event.target.value);
   setForm({...form,  [event.target.name]:event.target.value});
  }
  
  const handleReset = () => {
  setForm({ username: "", password: "" });
};
  
  return (
    <>
      <Navbar/>
      <div className="bg-gray-100 h-30 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-6">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input
            type="username"
            id="username"
            name="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
          <button
            type="reset"
            name="reset"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
      <Footer/>
    </>
  );
};

export default login;
