import React from "react";
import { Link } from "react-router-dom";
import eve from "../../public/asset/images/eve.jpeg";
import event from "../../public/asset/images/event.jpeg";
import reserv from "../../public/asset/images/reserv.jpeg";
import Card from "./Card";

const LatestBlog = () => {
  return (
    <>
      <div className='flex justify-center'>
        <span className='text-center font-bold text-3xl text-primaryRed'>
          Latest Blog News
        </span>
      </div>
      <section className='mt-4 p-4 md:p-8 w-full flex flex-col md:flex-row items-center justify-center text-center space-y-4 md:space-y-0 md:space-x-4'>
        <Card className='h-full w-full flex-1 p-4'>
          <div className='w-full h-48 md:h-64'>
            <img
              className='w-full h-full object-cover rounded-md'
              src={eve}
              alt=''
            />
          </div>
          <span className='mt-2 text-2xl font-bold'>
            Best Type Of Wine
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolores aliquid corrupti autem
            nostrum nobis hic atque officiis? Tempore
            repellat saepe ab.{" "}
            <Link to={"/blog"}>Read more...</Link>
          </p>
        </Card>
        <Card className='h-full w-full flex-1 p-4'>
          <div className='w-full h-48 md:h-64'>
            <img
              className='w-full h-full object-cover rounded-md'
              src={event}
              alt=''
            />
          </div>
          <span className='mt-2 text-2xl font-bold'>
            Eggs and Cheese
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolores aliquid corrupti autem
            nostrum nobis hic atque officiis? Tempore
            repellat saepe ab.{" "}
            <Link to={"/blog"}>Read more...</Link>
          </p>
        </Card>
        <Card className='h-full w-full flex-1 p-4'>
          <div className='w-full h-48 md:h-64'>
            <img
              className='w-full h-full object-cover rounded-md'
              src={reserv}
              alt=''
            />
          </div>
          <span className='mt-2 text-2xl font-bold'>
            Wedding Reservations
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolores aliquid corrupti autem
            nostrum nobis hic atque officiis? Tempore
            repellat saepe ab.{" "}
            <Link to={"/blog"}>Read more...</Link>
          </p>
        </Card>
      </section>
    </>
  );
};

export default LatestBlog;
