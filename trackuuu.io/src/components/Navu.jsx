import React,{useState,useEffect} from 'react'
import { CgMenuGridO } from "react-icons/cg";

const Navu = () => {
    const [time, setTime] = useState(new Date());

    const today = new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
      }).format(new Date());
      const month= new Intl.DateTimeFormat('en-GB', {
        month: 'long',
      }).format(new Date());
      useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date());
        }, 1000); // update every second
    
        return () => clearInterval(interval);
      }, []);
    
      const formattedTime = time.toLocaleTimeString('en-GB', {
        hour12: false,       // 24-hour format
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    
  return (
    <div>
        <div className="w-full bg-[#E42F7B] h-25 md:h-35 lg:h-45 flex items-center justify-center pt-4  ">
  <div className="w-full  mx-auto w-4xl px-4 flex justify-between items-center relative h-fit ">
    
    {/* Left - Date Box */}
    <div className="bg-[#f9f9f9] w-16 h-12 flex flex-col items-center justify-center rounded-sm md:h-16 lg:h-18 md:w-16 md:ml-4 lg:ml-8">
      <div className="font-bold text-2xl md:text-3xl lg:text-4xl ">{today}</div>
      <div className="font-semibold opacity-80 text-sm">{month}</div>
    </div>

    {/* Center - Title + Time */}
    <div className="flex flex-col items-center justify-center   w-100  ">
      <div className="font-bold bg-black text-[#f9f9f9]  w-40  lg:w-100 h-fit md:w-70 text-center rounded-sm pb-2 text-2xl tracking-wide md:text-4xl lg:text-6xl">TRACKUU.<span >IO</span></div>
      <div className="font-bold opacity-90 text-black text-2xl md:text-3xl">{formattedTime}</div>
    </div >
    <div className=' w-12 absolute  right-4 md:right-20 lg-right-30  '>
        <h1><CgMenuGridO className='text-black  text-3xl md:text-5xl lg-text-7xl'/></h1>
    </div>

    {/* Right - Empty Spacer to balance layout */}
    <div className="w-12 h-12" /> {/* same size as left box to balance symmetry */}
    
  </div>
</div>

    </div>
  )
}

export default Navu