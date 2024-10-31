import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
    return (
        <div
            id="tasklist"
            className="h-[0%] overflow-x-auto flex items-start justify-start gap-5 flex-wrap sm:flex-nowrap w-full py-1 mt-16"
        >
            {data.tasks.length > 0 ? (
                data.tasks.map((elem, idx) => {
                    if (elem.active) {
                        return <AcceptTask key={idx} data={elem} />;
                    }
                    if (elem.newTask) {
                        return <NewTask key={idx} data={elem} />;
                    }
                    if (elem.completed) {
                        return <CompleteTask key={idx} data={elem} />;
                    }
                    if (elem.failed) {
                        return <FailedTask key={idx} data={elem} />;
                    }
                    return null; // Fallback if no conditions match
                })
            ) : (
                <div className="text-center text-gray-500 font-medium w-full">No tasks available</div>
            )}
        </div>
    );
};

export default TaskList;
