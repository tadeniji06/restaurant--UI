import React from "react";
import table from "../../public/asset/images/roundT.jpg";

const Discover = () => {
  return (
    <section className='relative w-full h-[250px] sm:h-[300px] md:h-[350px] mt-3'>
      <div className='w-full h-full p-4'>
        <img
          className='w-full h-full object-cover rounded-md blur-sm'
          src={table}
          alt=''
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <span className='text-2xl sm:text-3xl md:text-4xl font-bold'>
            <i>Discover</i>
          </span>
          <p className='font-serif text-lg sm:text-xl md:text-2xl'>
            <i>Devon's Kitchen</i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Discover;
