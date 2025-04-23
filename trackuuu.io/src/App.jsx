import React, { useState } from 'react'

import Navu from './components/Navu';
import Container from './Container';
import Inputtask from './components/Inputtask';
const App = () => {
  
  const data=[
    {name: 'Task 1', description:'goodddd', priority:'high', completed: false},
    {name: 'Task 2', description:'goodddd', priority:'high', completed: false},
    {name: 'Task 3', description:'goodddd', priority:'high', completed: true},
    {name: 'Task 4', description:'goodddd', priority:'high', completed: false},
    {name: 'Task 5', description:'goodddd', priority:'high', completed: false},
    {name: 'Task 6', description:'goodddd', priority:'high', completed: true},
  ];
    
    
const [filterStatus, setFilterStatus] = useState("All");
const [editIndex, setEditIndex] = useState(null);  
const [editData, setEditData] = useState(null);    
const[task,settask]=useState(data);
const handleDeleteTask=(dindex)=>{
  settask(prev => prev.filter((item, index) => index!==dindex));
}
const handleEditTask=(index)=>{
  setEditIndex(index);
  setEditData(task[index]);
  
}
const checkbox = (cindex) => {
  settask(prev =>                                                         //prev is copy of original data
    prev.map((item, index) =>                                             //ek ek karke sbko check karega contain one object of data and index uska 
      index === cindex ? { ...item, completed: !item.completed } : item   //agar index and toggle wala index same hoga to item ko khol do matlb uske saare inside key ko and complete to change kardo
    )
  );
};
const filteredTasks = task.filter(item => {
  if (filterStatus === "Pending") return !item.completed;
  if (filterStatus === "Completed") return item.completed;
  return true;
});

const handleformsubmit = (data) => {
  if (editIndex !== null) {
    const updatedTasks = [...task];
    updatedTasks[editIndex] = {
      ...data,
      id: task[editIndex].id,
    };

    settask(updatedTasks);
    setEditIndex(null);
    setEditData(null);
  } else {
    const newTask = { ...data, id: Date.now() };
    settask((prev) => [...prev, newTask]);
  }
};

console.log(filteredTasks); // To check if the filtering is working properly.
console.log(task); // To check if the tasks are being updated.

  return (
    <div className='w-full h-screen overflow-hidden  bg-[#f9f9f9]'>
      <Navu/>
      <h1 className='text-[#E42F7B] text-center font-semibold text-xl'>TASKS PENDING - <span className='text-black opacity-80 font-bold'>{task.filter(item => !item.completed).length}
      </span> </h1>
      <div className="flex justify-center gap-4 my-4">
        <button onClick={() => setFilterStatus("All")} className="bg-blue-300 px-3 py-1 rounded">All</button>
        <button onClick={() => setFilterStatus("Pending")} className="bg-yellow-300 px-3 py-1 rounded">Pending</button>
        <button onClick={() => setFilterStatus("Completed")} className="bg-green-300 px-3 py-1 rounded">Completed</button>
      </div>
      <Container filteredTasks={filteredTasks}  handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask} checkbox={checkbox} />   
      <Inputtask task={task} handleformsubmit={handleformsubmit} editData={editData} /> 
    </div>
  )
}

export default App