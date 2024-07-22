import React from "react";
import roundT from "../../public/asset/images/roundT.jpg";

const MenuHeader = ({children, title}) => {
  return (
    <div className='w-full h-[200px] md:h-[400px] overflow-hidden relative p-3'>
      <img
        className='w-full h-full object-cover'
        src={roundT}
        alt='menu image'
      />
      <span className='absolute inset-0 text-white text-center text-4xl font-bold justify-center items-center flex flex-col'>
       {title}
      </span>
    </div>
  );
};

export default MenuHeader;
