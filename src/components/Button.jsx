import React from "react";

const Button = ({ onClick, className, title }) => {
  return (
    <div>
      <button
        className={`${className} bg-slate-800 border-none rounded-md`}
        onClick={onClick}
      >
        <p className='text-white font-medium'>{title}</p>
      </button>
    </div>
  );
};

export default Button;
