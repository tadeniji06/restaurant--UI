import React from "react";
import { Link } from "react-router-dom";
import steak from "../../public/asset/images/steak.jpeg";

const Welcome = () => {
  return (
    <section className='flex flex-col md:flex-row mt-3 min-h-[300px] w-full p-4 md:p-6 gap-6'>
      <div className='flex-1 flex flex-col justify-between'>
        <div>
          <h1 className='text-2xl md:text-3xl font-bold text-primaryRed mb-2'>
            Devon's Kitchen
          </h1>
          <h2 className='text-xl md:text-2xl font-bold mb-4'>
            Welcome
          </h2>
          <p className='text-gray-700 mb-4 text-sm md:text-md'>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam sint, qui
            consequatur modi eum et minima sequi doloribus
            sunt. Possimus fuga molestias aspernatur esse
            labore iusto officia! Maiores, cupiditate
            voluptatem. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quo culpa
            excepturi ut cupiditate ea qui magni delectus
            eaque quaerat eius vitae cum molestias
            explicabo, possimus quidem tempore unde tempora
            maiores.
          </p>
        </div>
        <Link
          to='/about'
          className='text-primaryRed hover:underline transition-all duration-300 ease-in-out'
        >
          Our Story <span aria-hidden='true'>➡️</span>
        </Link>
      </div>
      <div className='flex-1 mt-4 md:mt-0'>
        <img
          className='w-full h-full object-cover rounded-md shadow-lg'
          src={steak}
          alt='Delicious steak'
        />
      </div>
    </section>
  );
};

export default Welcome;
