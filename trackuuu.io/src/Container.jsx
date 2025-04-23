import React, { useState } from 'react';
import { MdModeEditOutline, MdDelete } from "react-icons/md";

const Container = ({  filteredTasks=[], handleDeleteTask, handleEditTask, checkbox }) => {
 
  return (
    <div className='w-full min-h-30 lg:min-h-80 mt- font-semibold flex justify-center border-t-2 border-[#f9f9f9]'>
       
      <div className='w-10 bg-pink-400 text-[1.7vh]  uppercase border-l-3 border-r-3 border-[#f9f9f9]'>
        <h1 className='border-b-2  border-[#f9f9f9] lg:py-[0.3vh] text-center lg:text-lg'>✅</h1>
        { filteredTasks.map((items, index) => (
          <div key={index} className='flex md:py-[0.7vh] lg:py-[1.25vh] items-center justify-center border-b-2 border-[#f9f9f9] p-[0.5vh]'>
            <input
              type="checkbox"
              checked={ filteredTasks[index].completed}                           //Ye  filteredTasks wo prop hai jo App.jsx se Container.jsx ko bheja gaya hai.
              className="w-5 h-5 accent-blue-500 cursor-pointer"        //Ye ek array hai, jisme har ek  filteredTasks ka data (name, description, priority, completed, etc.) hai.
              onChange={() => checkbox(index)}                          //Agar  filteredTasks[index].completed true hai ( filteredTasks complete hai), toh checkbox 
                                                                        //    checked ho jayega.
                                                                        //Agar  filteredTasks[index].completed false hai ( filteredTasks pending hai), toh checkbox unchecked rahega.
            />
          </div>
        ))}
      </div>

   
      <div className='w-30 lg:w-80 bg-[#f33283] text-[1.7vh] lg:text-2xl lg:font-semibold uppercase border-r-3 border-[#f9f9f9]'>
        <h1 className='border-b-2 border-[#f9f9f9] pl-2'>TASK</h1>
        { filteredTasks.map((item, index) => (
          <div key={index} className='flex items-center justify-start border-b-2 border-[#f9f9f9] p-1'>
            <div className='w-30 text-[#f9f9f9]  '>{item.name}</div>
            <button className="ml-2 bg-black text-white rounded hover:bg-blue-700 text-xs p-1" onClick={() => handleEditTask(index)}>
              <MdModeEditOutline />
            </button>
            <button className="ml-2 bg-black text-white rounded hover:bg-red-700 text-xs p-1" onClick={() => handleDeleteTask(index)}>
              <MdDelete />
            </button>
          </div>
        ))}
      </div>

      
      <div className='w-15  lg:w-40 bg-[#ffadd7] text-[1.7vh] lg:text-2xl lg:font-semibold uppercase border-r-3 border-[#f9f9f9]'>
        <h1 className='border-b-2 border-[#f9f9f9]'>PRIORITY</h1>
        { filteredTasks.map((item, index) => (
          <div key={index} className='flex items-center border-b-2 border-[#f9f9f9] p-1'>
            <div className={`ml-2 w-20 ${
              item.priority === 'High' ? 'text-red-600' :
              item.priority === 'Medium' ? 'text-orange-400' :
              'text-green-600'
            }`}>
              {item.priority}
            </div>
          </div>
        ))}
      </div>

      
      <div className='w-25 lg:w-80 bg-[#f3d3ff] text-[1.7vh] lg:text-2xl lg:font-semibold uppercase border-r-3 border-[#f9f9f9]'>
        <h1 className='border-b-2 border-[#f9f9f9]'>ABOUT</h1>
        { filteredTasks.map((item, index) => (
          <div key={index} className='flex items-center border-b-2 border-[#f9f9f9] p-1'>
            <div className='ml-2 w-64 truncate text-[#5f5f5f]'>{item.description}</div>
          </div>
        ))}
      </div>

      <div className='w-16 lg:w-40 bg-[#f8bdc7] text-[1.7vh] lg:text-2xl lg:font-semibold uppercase border-r-3 border-[#f9f9f9]'>
        <h1 className='border-b-2 border-[#f9f9f9]'>STATUS</h1>
        { filteredTasks.map((item, index) => (
          <div key={index} className='flex items-center border-b-2 border-[#f9f9f9] p-1'>
            <div className={`ml-2 font-semibold ${
              item.completed ? 'text-green-500' : 'text-red-500'  //yaha check karega ki completed true or false hai.
            }`}>
              {item.completed ? 'Done' : 'Pending'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
