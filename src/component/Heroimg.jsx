import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
// import { motion } from 'framer-motion';
// import {fadeIn} from '../variants.js';
// import heroinner from "../assets/herobg.svg"
// import herobg from "../assets/heroinner.jpg"
const Heroimg = () => {
  return (
    <div>
      <div className='max-width'>
            <div
            // variants={fadeIn("up", 0.2)}
            // initial="show"
            // whileInView={"show"}
            // viewport={{once: false , amount:0.7}}
            className='flex justify-between items-center'>
                <div className='leading-normal'>
                <h4 className='font-light text-sm text-black' ><span className='text-black border border-gray-50 mr-1'><FontAwesomeIcon icon={faCircle} /></span>BEST IN THE INDUSTRY</h4>
                    <div className=''><h1 className='text-[70px] '>Your Gateway to </h1> <h1> <span className='heading'> Next-Gen IT Solutions</span></h1></div>
                </div>
                <div className='max-w-[30%]'>
                    <p>Imagine an IT partner that speaks your language and prioritises your success. That's Ariantech Solutions. We deliver exceptional, custom-crafted solutions to propel your business forward.</p>

                    <button className='border border-[#524d4d] mt-[1em]'>explore more <span className='arrow'></span></button>
                </div>
            </div>
      </div>
      <div className="bg-hero w-full  h-[600px]">
      {/* <div><img className='bg-cover bg-center w-full z-1' src={heroinner} alt="" /></div> */}
    </div>
    {/* <div className='relative'> */}
      {/* Background Image */}
      {/* <div className='absolute inset-0 z-0'>
        <img className='object-cover w-full h-full' src={herobg} alt="Background" />
      </div> */}

      {/* Foreground Image */}
      {/* <div className='relative z-10'>
        <img className='object-cover w-full h-full' src={heroinner} alt="Foreground" />
      </div> */}
    {/* </div> */}
    </div>
  )
}

export default Heroimg

