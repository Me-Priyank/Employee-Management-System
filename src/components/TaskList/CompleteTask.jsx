import React from "react";

export default function CompleteTask(){
    return (
        <div className="h-full flex-shrink-0 w-[352px] p-5 bg-[#FFA500] rounded-xl" >
        <div className="flex justify-between items-center">
            <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
            <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Video</h2>
        <p className="text-sm mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo neque natus repellat aspernatur possimus consectetur cum. Facilis, nesciunt voluptas. Facilis voluptatem non tenetur in sint aliquam? Pariatur eum nostrum error.
        </p>
        <div className="mt-20">
                    <button className="bg-green-500 py-3 px-3 w-full text-sm rounded-full ease-in duration-150 hover:bg-green-600">Completed</button>
                </div>
    </div>
    )
}