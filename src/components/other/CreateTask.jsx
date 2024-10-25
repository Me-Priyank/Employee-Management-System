import React from "react";

export default function CreateTask(){
    return (
        <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
        <form className="flex flex-wrap w-full items-start justify-between">
          <div className="w-1/2">
          <div>
              <h3 className="text-lg text-grey-300 mb-1" >Task Title</h3>
          <input type="text" className="text-sm py-3 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4" id="" placeholder="Title" />
          </div>
          <div>
           <h3 className="text-lg text-grey-300 mb-1">Date</h3>
          <input type="date"  className="text-sm py-3 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4" name="" id="" />
          </div>

         <div> 
          <h3 className="text-lg text-grey-300 mb-1">Assign To</h3>
          <input type="text"  className="text-sm py-3 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4" placeholder="Employee Name" id="" />
          </div>

        <div>
            <h3 className="text-lg text-grey-300 mb-1">Category</h3>
          <input type="text"  className="text-sm py-3 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4" placeholder="role" id="" />
          </div>
          </div>


          <div className="w-2/5 flex flex-col items-start">
              <h3 className="text-sm text-grey-300 mb-0.5">Description</h3>
          <textarea name="" id="" className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-grey-400"></textarea>
          <button className=" bg-emerald-500 py-4 hover:bg-emerald-600 px-5 rounded text-lg mt-8 w-full">Create Task</button>

          </div>

         
        </form>
     </div>
    )
}