import React, { useState } from "react";
import {
  AlignJustify,
  Facebook,
  Twitter,
  X,
} from "lucide-react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import Card from "./Card";
import Button from "./Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navLinks = [
    "Home",
    "Menu",
    "Reservation",
    "Gallery",
    "About",
    "Blog",
    "Contact",
  ];

 useGSAP(() => {
   if (open) {
     gsap.fromTo(
       ".card",
       { opacity: 0, y: 50 },
       {
         duration: 1,
         opacity: 1,
         y: 0,
         ease: "bounce",
       }
     );
   }
 }, [open]);


  return (
    <nav className='flex items-center justify-between w-full p-5'>
      {/* logo */}
      <Link to={'/'}>
        <div className='font-bold cursor-pointer'>
          Logo
        </div>
      </Link>

      {/* desktop links */}
      <ul className='hidden md:flex gap-[45px] list-none navbar-links'>
        {navLinks.map((link) => (
          <li key={link} className='cursor-pointer'>
            {link}
          </li>
        ))}
      </ul>

      <div className='hidden md:flex gap-[20px]'>
        <Facebook className='w-[40px] h-[40px] text-primaryRed cursor-pointer' />
        <Twitter className='w-[40px] h-[40px] text-primaryRed cursor-pointer' />
      </div>

      <div className='md:hidden'>
        <AlignJustify
          className='w-[40px] h-[40px] cursor-pointer'
          onClick={handleToggle}
        />
      </div>

      {open && (
        <Card
          className='fixed top-0 right-0 h-full w-[300px] p-5 z-50 card'
          style={{
            opacity: 0,
            transform: "translateY(50px)",
          }}
        >
          <X
            className='cursor-pointer w-[40px] h-[40px] mb-5'
            onClick={handleClose}
          />
          <ul className='flex flex-col gap-8'>
            {navLinks.map((link) => (
              <li key={link} className='cursor-pointer'>
                {link}
              </li>
            ))}
          </ul>
          <div>
            <Button
              title='Book a Table'
              className='mt-5 p-2 rounded-md bg-primaryRed text-white'
            />
          </div>
        </Card>
      )}
    </nav>
  );
};

export default NavBar;
