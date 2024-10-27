import React from 'react';

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-6 bg-blue-500 rounded-xl shadow-lg transform transition-transform duration-300  hover:shadow-2xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="bg-red-600 text-xs px-3 py-1 rounded-full text-white font-semibold shadow-sm">
          {data.category}
        </h3>
        <h4 className="text-xs font-semibold text-gray-200">{data.taskDate}</h4>
      </div>
      
      <h2 className="mt-4 text-2xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-100 leading-relaxed">{data.taskDescription}</p>
      
      <div className="mt-8">
        <button className="w-full bg-green-600 text-white rounded-full font-medium py-3 text-sm shadow-md hover:bg-green-700 hover:shadow-lg transform transition-all duration-200 ease-out active:scale-95">
          Complete
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
