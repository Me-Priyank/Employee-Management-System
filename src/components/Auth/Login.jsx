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
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-600">
      <div className="bg-white/90 shadow-2xl rounded-3xl p-10 w-full max-w-sm transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-emerald-700 text-center mb-6">Welcome Back!</h2>
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
  );
};

export default Login;
