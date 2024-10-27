import React from 'react';

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 overflow-x-auto overflow-y-auto h-full w-[300px] p-6 bg-red-500 rounded-xl shadow-xl transform transition-transform duration-300 hover:shadow-2xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="bg-red-700 text-xs px-3 py-1 rounded-full text-white font-semibold shadow-sm">{data.category}</h3>
        <h4 className="text-xs font-semibold text-gray-200">{data.taskDate}</h4>
      </div>
      
      <h2 className="mt-4 text-2xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-100 leading-relaxed">
        {data.taskDescription}
      </p>
      
      <div className="flex justify-between mt-8">
        <button className="bg-green-500 text-white rounded-full font-medium py-2 px-4 text-sm shadow-md hover:bg-green-600 hover:shadow-lg transform transition-all duration-200 ease-out active:scale-95">
          Mark as Completed
        </button>
        <button className="bg-red-600 text-white rounded-full font-medium py-2 px-4 text-sm shadow-md hover:bg-red-700 hover:shadow-lg transform transition-all duration-200 ease-out active:scale-95">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
