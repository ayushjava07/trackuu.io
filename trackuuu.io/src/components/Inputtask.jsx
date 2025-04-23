import React ,{useEffect}from 'react';
import { useForm } from 'react-hook-form';

const Inputtask = ({ handleformsubmit ,editData}) => {
  const { register, handleSubmit,reset,formState: { errors } } = useForm();
  useEffect(() => {
    if (editData && Object.keys(editData).length >= 0) {
      reset(editData);
    }
  }, [editData, reset]);
  const onSubmit = (data) => {
    handleformsubmit(data); 
    reset(); 
  };
  

  return (
    <div className="flex justify-center  w-full h-[100vh]">
      <div className="lg:absolute lg:left-1/2  lg:-translate-x-[90%] w-50  p-4 rounded-">
        <div className="mt-5 w-50 h-55 md:h-70 md:w-75 md:ml-10 absolute left-1/2 -translate-x-1/2 bg-pink-600 p-4 rounded-lg shadow-lg flex items-center flex-col gap-6">
          <form onSubmit={handleSubmit((data)=>{
            reset();
            handleformsubmit(data);
            
          })} className="flex flex-col gap-4">
            <input
              {...register('name',{required:"#name is required."})}
              
              type="text"
              className="w-full h-8 sm:w-72 outline-none border-2 border-[#dadada] lg:text-2xl lg:h-12 rounded-lg py-3 px-4 font-semibold text-[#f9f9f9] placeholder:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Add task"
            />
            {errors.name && (
            <span className="text-red-900 text-[1.5vh] absolute top-12 font-bold text-shadow-xl/30">{errors.name.message}</span>
            )}

            <input
              {...register('priority',{required:"#must choose an option."})}
              type="text"
              list="priorityOptions"
              className="w-full h-8 sm:w-72 outline-none border-2 border-[#dadada] rounded-lg py-3 px-4 lg:text-2xl lg:h-12 font-semibold text-[#f9f9f9] placeholder:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Select Priority"
            />
             {errors.priority && (
            <span className="text-red-900 text-[1.5vh] absolute top-24 font-bold text-shadow-xl/30">{errors.priority.message}</span>
            )}
            <datalist id="priorityOptions">
              <option value="High" />
              <option value="Medium" />
              <option value="Low" />
            </datalist>

            <input
              {...register('description',{required:"#must write a description."})}
              type="text"
              className="w-full sm:w-72 h-8 outline-none lg:text-2xl lg:h-12 border-2 border-[#dadada] rounded-lg py-3 px-4 text-[#f9f9f9] placeholder:text-white font-semibold focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
              placeholder="About task"
            />
             {errors.description && (
            <span className="text-red-900 text-[1.5vh] absolute top-36 font-bold text-shadow-xl/30">{errors.description.message}</span>
            )}
            <button
              type="submit"
              className="w-full sm:w-28 py-3 h-10 text-center px-4 bg-white text-pink-600 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inputtask;
