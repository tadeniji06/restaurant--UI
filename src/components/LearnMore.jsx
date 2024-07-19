import React from "react";
import { Link } from "react-router-dom";
import table from "../../public/asset/images/roundT.jpg";
import ham from "../../public/asset/images/ham.jpg";
import berry from "../../public/asset/images/berry.jpg";
import Card from "./Card";

const LearnMore = () => {
  return (
    <section className='mt-4 p-4 md:p-8 w-full flex flex-col md:flex-row items-center justify-center text-center space-y-4 md:space-y-0 md:space-x-4'>
      <Card className='h-full w-full flex-1 p-4'>
        <div className='w-full h-48 md:h-64'>
          <img
            className='w-full h-full object-cover rounded-md'
            src={table}
            alt=''
          />
        </div> 
        <span className='mt-2 text-2xl font-bold'>
          Continental Food.
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores aliquid corrupti autem nostrum nobis
          hic atque officiis? Tempore repellat saepe ab.
        </p>
      </Card>
      <Card className='h-full w-full flex-1 p-4'>
        <div className='w-full h-48 md:h-64'>
          <img
            className='w-full h-full object-cover rounded-md'
            src={ham}
            alt=''
          />
        </div>
        <span className='mt-2 text-2xl font-bold'>
          Fast Food.
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores aliquid corrupti autem nostrum nobis
          hic atque officiis? Tempore repellat saepe ab.
        </p>
      </Card>
      <Card className='h-full w-full flex-1 p-4'>
        <div className='w-full h-48 md:h-64'>
          <img
            className='w-full h-full object-cover rounded-md'
            src={berry}
            alt=''
          />
        </div>
        <span className='mt-2 text-2xl font-bold'>
          Vegetables.
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores aliquid corrupti autem nostrum nobis
          hic atque officiis? Tempore repellat saepe ab.
        </p>
      </Card>
    </section>
  );
};

export default LearnMore;
