import React from 'react';

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex flex-wrap mt-10 justify-between gap-5">
      
      <div className="rounded-xl w-[45%] py-6 px-9 bg-blue-400 text-white shadow-lg transform transition-transform duration-200 hover:scale-105">
        <h2 className="text-4xl font-bold">{data.taskCounts.newTask}</h2>
        <h3 className="text-lg mt-1 font-semibold">New Task</h3>
      </div>
      
      <div className="rounded-xl w-[45%] py-6 px-9 bg-green-500 text-white shadow-lg transform transition-transform duration-200 hover:scale-105">
        <h2 className="text-4xl font-bold">{data.taskCounts.completed}</h2>
        <h3 className="text-lg mt-1 font-semibold">Completed Task</h3>
      </div>
      
      <div className="rounded-xl w-[45%] py-6 px-9 bg-yellow-400 text-black shadow-lg transform transition-transform duration-200 hover:scale-105">
        <h2 className="text-4xl font-bold">{data.taskCounts.active}</h2>
        <h3 className="text-lg mt-1 font-semibold">Active Task</h3>
      </div>
      
      <div className="rounded-xl w-[45%] py-6 px-9 bg-red-500 text-white shadow-lg transform transition-transform duration-200 hover:scale-105">
        <h2 className="text-4xl font-bold">{data.taskCounts.failed}</h2>
        <h3 className="text-lg mt-1 font-semibold">Failed Task</h3>
      </div>

    </div>
  );
};

export default TaskListNumbers;
