import React, { useEffect, useState } from "react";
import berry from "../../public/asset/images/berry.jpg";
import hero from "../../public/asset/images/hero.jpeg";
import soup from "../../public/asset/images/soup.jpg";
import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [berry, hero, soup];
  const [image, setImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImage(
        (prevIndex) => (prevIndex + 1) % images.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setImage(
      (prevIndex) => (prevIndex + 1) % images.length
    );
  };

  const prevImage = () => {
    setImage(
      (prevIndex) =>
        (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className='w-full'>
      <div className='w-full h-[300px] sm:h-[400px] md:h-[500px] relative overflow-hidden'>
        <ChevronLeft
          onClick={prevImage}
          className='h-[30px] w-[35px] absolute left-3 top-1/2 transform -translate-y-1/2 bg-slate-500 text-white p-2 rounded-full cursor-pointer z-10'
        />
        <ChevronRight
          onClick={nextImage}
          className='h-[30px] w-[35px] absolute right-3 top-1/2 transform -translate-y-1/2 bg-slate-500 text-white p-2 rounded-full cursor-pointer z-10'
        />
        <img
          className='w-full h-full object-cover rounded-md blur-sm'
          src={images[image]}
          alt='slide-image'
        />

        <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
          <span className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 animate-flow font-bold'>
            Welcome
          </span>
          <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold animate-flow animation-delay-500 text-center'>
            To Devon's Kitchen
          </p>
          <Link to='/menu'>
            <Button
              className='mt-5 p-2 rounded-md bg-primaryRed text-white hover:bg-red-300'
              title='View Menu'
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
