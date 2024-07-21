import React, { useEffect, useRef } from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Mail,
} from "lucide-react";
import { gsap } from "gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    gsap.fromTo(
      footer.querySelectorAll(".footer-item"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      footer.querySelectorAll(".social-icon"),
      { scale: 0, rotation: -180 },
      {
        scale: 1,
        rotation: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className='bg-black text-white p-10'
    >
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='footer-item'>
            <h3 className='text-2xl font-bold mb-4'>
              Company Name
            </h3>
            <p className='text-gray-400'>
              Creating amazing experiences since 2023.
            </p>
          </div>
          <div className='footer-item'>
            <h4 className='text-xl font-semibold mb-4'>
              Quick Links
            </h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition-colors'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-item'>
            <h4 className='text-xl font-semibold mb-4'>
              Connect With Us
            </h4>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='social-icon hover:text-blue-400 transition-colors'
              >
                <Instagram size={24} />
              </a>
              <a
                href='#'
                className='social-icon hover:text-blue-400 transition-colors'
              >
                <Twitter size={24} />
              </a>
              <a
                href='#'
                className='social-icon hover:text-blue-400 transition-colors'
              >
                <Facebook size={24} />
              </a>
              <a
                href='#'
                className='social-icon hover:text-blue-400 transition-colors'
              >
                <Linkedin size={24} />
              </a>
              <a
                href='#'
                className='social-icon hover:text-blue-400 transition-colors'
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className='footer-item mt-8 pt-8 border-t border-gray-800 text-center'>
          <p className='text-gray-400'>
            &copy; 2023 Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
