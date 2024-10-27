// Header.jsx
import React from 'react';

const Header = ({data}) => {


  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    console.log("User logged out, username reset to 'Admin'");
  };

  return (
    <div className="flex items-end justify-between bg-gradient-to-r from-gray-800 to-gray-700 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-medium text-white">
        Hello, <br />
        <span className="text-3xl font-semibold text-emerald-400">{data?.firstName || 'Admin'} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 text-base font-medium text-white px-5 py-2 rounded-lg transition duration-200 shadow-lg"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
