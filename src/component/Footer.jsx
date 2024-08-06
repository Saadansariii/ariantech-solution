import React from 'react';
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    // <div>
    <div className='bg-gradient-to-r from-[#e5d5e6] border'>
      <div className='max-width mx-auto pt-8 '>
        <div className='flex justify-between'>
          {/* Ensures the logo is at the top and list items are at the bottom of the div */}
          <div className='flex flex-col'>
            <div className='w-[200px]'>
              <img src={logo} alt="Logo" />
            </div>
            <ul className='mt-auto'>
              <li className='border border-gray-500 text-sm p-2 mx-[1em] rounded-2xl mb-2'><a href="/"><span>Home</span></a></li>
              <li className='border border-gray-500 text-sm p-2 mx-[1em]  rounded-2xl mb-2'><a href="/"><span>About</span></a></li>
              <li className='border border-gray-500 text-sm p-2 mx-[1em]  rounded-2xl mb-2'><a href="/"><span>Service</span></a></li>
              <li className='border border-gray-500 text-sm p-2 mx-[1em]  rounded-2xl mb-2'><a href="/"><span>Privacy Policy</span></a></li>
            </ul>
          </div>
          <div className='max-w-[600px]'>
            <div className=''>
              <h2 className='py-3'>Driving business excellence through tailored IT solutions.</h2>
              <p>We specialise in providing IT services that drive business growth. Our process reflects dedication to client success, let's collaborate to create something extraordinary.</p>
            </div>
            <div className='my-8'>
              <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[400px] p-2.5 dark:text-white' type="text" placeholder='Email address' />
              <button className='bg-[#de4441] text-white ml-4 p-2.5 rounded-lg'>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='border-b border-gray-500 my-8'>
          
        </div>
        <div className='flex justify-between pb-8'>
          <p>Copyright © 2024 Ariantech Solutions Pvt. Ltd. All Rights Reserved</p>
          <ul className='flex '>
            <li className='ml-4'><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li className='ml-4'><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li className='ml-4'><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          </ul>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default Footer;
