import React, { useState } from "react";
import Card from "./Card";
import profile from "../../public/asset/images/profile.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomerReview = () => {
  const customers = [
    {
      _id: 1,
      name: "John Doe",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, rem recusandae? Minus, quidem, recusandae quo deserunt soluta architecto, ipsum assumenda sed cum sint alias eum veniam omnis fuga praesentium similique.",
    },
    {
      _id: 2,
      name: "Jane Smith",
      msg: "Excellent service! I'm very satisfied with the product and the customer support.",
    },
    {
      _id: 3,
      name: "Bob Johnson",
      msg: "The product is great and the customer service is excellent. I would recommend this product to anyone.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? customers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === customers.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className='h-[500px] w-full'>
      <div className='flex justify-center mb-6'>
        <span className='font-bold text-3xl'>
          Customer Reviews
        </span>
      </div>
      <Card
        className={
          "w-full h-full flex flex-col items-center justify-center text-center bg-white shadow-none border-none"
        }
      >
        <div className='flex items-center justify-center mb-4'>
          <button
            onClick={handlePrev}
            className='mr-4 p-2 bg-gray-200 rounded-full'
          >
            <ChevronLeft size={24} />
          </button>
          <div className='w-[200px] h-[200px] rounded-full border border-red-800'>
            <img
              className='object-cover w-full h-full rounded-full'
              src={profile}
              alt={customers[currentIndex].name}
            />
          </div>
          <button
            onClick={handleNext}
            className='ml-4 p-2 bg-gray-200 rounded-full'
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <p className='max-w-2xl mb-4'>
          {customers[currentIndex].msg}
        </p>
        <p className='font-bold'>
          {customers[currentIndex].name}
        </p>
      </Card>
      <div className='flex justify-center mt-[-30px]'></div>
    </section>
  );
};

export default CustomerReview;
