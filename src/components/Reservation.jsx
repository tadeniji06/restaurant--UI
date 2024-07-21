import { useState } from "react";
import DatePicker from "react-datepicker";
import Button from "./Button";
import picnic from "../../public/asset/images/picnic.jpeg";

import "react-datepicker/dist/react-datepicker.css";

const Reservation = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className=''>
      <div className='flex justify-center text-center'>
        <span className='text-3xl font-bold'>
          <p className='font-mono text-primaryRed'>
            Reservation
          </p>
          <br /> Book A Table
        </span>
      </div>

      <section className='w-full h-[450px] shadow-md rounded-md flex p-5'>
        <div className='flex flex-col md:grid grid-cols-2 gap-3 p-5 flex-1'>
          <div className='border border-slate-300 h-[50px] flex justify-center items-center '>
            <DatePicker
              className='outline-none p-2'
              selected={date}
              onChange={(date) => setDate(date)}
            />
          </div>
          <div className='border border-slate-300 h-[50px] flex justify-center items-center '>
            <input
              type=' text'
              placeholder='Enter your name'
              className='outline-none'
            />
          </div>
          <div className='border border-slate-300 h-[50px] flex justify-center items-center '>
            <input
              type='number'
              placeholder='Phone number'
              className='outline-none'
            />
          </div>
          <div className='border border-slate-300 h-[50px] flex justify-center items-center '>
            <input
              type='text'
              placeholder='Email'
              className='outline-none'
            />
          </div>

          <div className='border border-slate-300 h-[50px] flex justify-center items-center '>
            <input
              type='number'
              placeholder='No of tables'
              className='outline-none'
            />
          </div>
          <div className='h-[80px]'>
            <Button className={'w-full h-full'} title={"Book Table"} />
          </div>
        </div>
        <div>
          {/* image */}
          <div className='hidden md:flex flex-col items-center justify-center shadow-md'>
            <img
              className='w-full h-full object-cover rounded-md'
              src={picnic}
              alt=''
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
