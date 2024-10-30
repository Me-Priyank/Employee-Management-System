import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className=" loginnnn flex h-screen w-screen items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-600">
      <div className="flex w-3/4 justify-between items-start space-x-8">
        {/* Left Side: Admin Details */}
        <div className="flex flex-col space-y-4">
        <div className="adminDetails bg-gray-100 p-6 rounded-lg shadow-md">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">For Admin:</h1>
            <h2 className="text-black font-medium mb-2">
              Email: <span className="text-black">admin@me.com</span>
            </h2>
            <h2 className="text-black font-medium">
              Password: <span className="text-black">123</span>
            </h2>
          </div>
          <div className="employeeDetails bg-gray-100 p-6 rounded-lg shadow-md">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">For Employees:</h1>
            <h2 className="text-black font-medium mb-2">
              Email: <span className="text-black">e@e.com</span>
            </h2>
            <h2 className="text-black font-medium">
              Password: <span className="text-black">123</span>
            </h2><br />
            <h2 className="text-black font-medium mb-2">
              Email: <span className="text-black">employee2@example.com</span>
            </h2>
            <h2 className="text-black font-medium">
              Password: <span className="text-black">123</span>
            </h2><br />
            <h2 className="text-black font-medium mb-2">
              Email: <span className="text-black">employee3@example.com</span>
            </h2>
            <h2 className="text-black font-medium">
              Password: <span className="text-black">123</span>
            </h2><br />
            <h2 className="text-black font-medium mb-2">
              Email: <span className="text-black">employee4@example.com</span>
            </h2> 
            <h2 className="text-black font-medium">
              Password: <span className="text-black">123</span>
            </h2>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="bg-white/90 shadow-2xl mt-20 rounded-3xl p-10  max-w-sm w-full transform transition duration-500 hover:scale-105">
          <h2 className="text-3xl font-bold text-emerald-700 text-center mb-6">Welcome !</h2>
          <form onSubmit={submitHandler} className="flex flex-col items-center justify-center space-y-6">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full outline-none bg-white border-2 text-black border-emerald-400 focus:border-emerald-600 font-medium text-lg py-3 px-5 rounded-lg placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:ring-emerald-500"
              type="email"
              placeholder="Enter your email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full outline-none text-black bg-white border-2 border-emerald-400 focus:border-emerald-600 font-medium text-lg py-3 px-5 rounded-lg placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:ring-emerald-500"
              type="password"
              placeholder="Enter password"
            />
            <button className="mt-7 w-full text-white font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 py-3 px-8 rounded-lg transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 focus:ring-4 focus:ring-emerald-300">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
