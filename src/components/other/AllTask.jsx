import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-gray-900 p-6 rounded-lg mt-6 shadow-lg">
      {/* Header - visible only on larger screens */}
      <div className="bg-gradient-to-r from-red-400 to-pink-500 mb-4 py-3 px-5 hidden sm:flex flex-row justify-between rounded-lg text-white text-center sm:text-left">
        <h2 className="text-lg font-semibold w-full sm:w-1/5">Employee Name</h2>
        <h3 className="text-lg font-semibold w-full sm:w-1/5">New Task</h3>
        <h5 className="text-lg font-semibold w-full sm:w-1/5">Active Task</h5>
        <h5 className="text-lg font-semibold w-full sm:w-1/5">Completed</h5>
        <h5 className="text-lg font-semibold w-full sm:w-1/5">Failed</h5>
      </div>

      {/* Task Data */}
      <div className="space-y-3">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="border-2 border-emerald-500 bg-gray-800 hover:bg-gray-700 transition duration-300 py-3 px-5 flex flex-col sm:flex-row justify-between rounded-lg text-white text-center sm:text-left"
          >
            {/* Mobile Layout */}
            <div className="flex flex-col sm:flex-row w-full">
              <h2 className="text-md font-medium w-full sm:w-1/5">
                <span className="sm:hidden font-semibold">Employee Name: </span>
                {elem.firstName}
              </h2>
              <h3 className="text-md font-medium w-full sm:w-1/5 text-blue-400">
                <span className="sm:hidden font-semibold">New Task: </span>
                {elem.taskCounts.newTask}
              </h3>
              <h5 className="text-md font-medium w-full sm:w-1/5 text-yellow-400">
                <span className="sm:hidden font-semibold">Active Task: </span>
                {elem.taskCounts.active}
              </h5>
              <h5 className="text-md font-medium w-full sm:w-1/5 text-green-400">
                <span className="sm:hidden font-semibold">Completed: </span>
                {elem.taskCounts.completed}
              </h5>
              <h5 className="text-md font-medium w-full sm:w-1/5 text-red-500">
                <span className="sm:hidden font-semibold">Failed: </span>
                {elem.taskCounts.failed}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
