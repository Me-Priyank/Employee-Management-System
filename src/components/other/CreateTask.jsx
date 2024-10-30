import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };

    const updatedData = userData.map((elem) => {
      if (asignTo === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1
          }
        };
      }
      return elem;
    });

    setUserData(updatedData);
    localStorage.setItem('employees', JSON.stringify(updatedData));
    console.log(updatedData);

    // Clear form fields
    setTaskTitle('');
    setCategory('');
    setAsignTo('');
    setTaskDate('');
    setTaskDescription('');
  };

  return (
    <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 mt-5 rounded-lg shadow-lg">
      <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between gap-6">
        <div className="w-full lg:w-1/2">
          {/* Task Title Input */}
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-2 px-4 w-full rounded-lg outline-none bg-gray-700 border-[1px] border-gray-600 focus:border-emerald-500 focus:bg-gray-800 transition duration-200"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          {/* Date Input */}
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-2 px-4 w-full rounded-lg outline-none bg-gray-700 border-[1px] border-gray-600 focus:border-emerald-500 focus:bg-gray-800 transition duration-200"
              type="date"
            />
          </div>
          {/* Assign to Input */}
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="text-sm py-2 px-4 w-full rounded-lg outline-none bg-gray-700 border-[1px] border-gray-600 focus:border-emerald-500 focus:bg-gray-800 transition duration-200"
              type="text"
              placeholder="Employee name"
            />
          </div>
          {/* Category Input */}
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-4 w-full rounded-lg outline-none bg-gray-700 border-[1px] border-gray-600 focus:border-emerald-500 focus:bg-gray-800 transition duration-200"
              type="text"
              placeholder="Design, Dev, etc."
            />
          </div>
        </div>

        <div className="w-full lg:w-2/5 flex flex-col items-start">
          {/* Description Input */}
          <h3 className="text-sm text-gray-300 mb-1">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded-lg outline-none bg-gray-700 border-[1px] border-gray-600 focus:border-emerald-500 focus:bg-gray-800 transition duration-200 resize-none"
            placeholder="Enter task description"
          />
          <button className="bg-emerald-500 text-white py-3 hover:bg-emerald-600 px-5 rounded-lg text-sm mt-4 w-full shadow-md transition duration-200">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
