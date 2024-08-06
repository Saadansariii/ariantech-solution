import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDown);

const Values = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      <div className='flex justify-between my-4'>
        {/* Left Section */}
        <div className='w-full max-w-[40%] p-4'>
          <h2>Our values</h2>
          <div className='values my-4 border border-gray-300 rounded-md p-4'>
            <details className="group" open>
              <summary className="flex items-center justify-between cursor-pointer p-1 rounded-md">
                Customer-centric Philosophy
                <FontAwesomeIcon icon="angle-down" />
              </summary>
              <div className="mt-3">
                <p>Our clients are paramount in our mission. We are dedicated to comprehending their distinct requirements, delivering bespoke solutions that align with their objectives, and ensuring their success is our top priority.</p>
              </div>
            </details>
          </div>
          <div className='values my-[2em] border border-gray-300 rounded-md p-4'>
            <details className="group" open>
              <summary className="flex items-center justify-between cursor-pointer p-1 rounded-md">
                Ethical foundation
                <FontAwesomeIcon icon="angle-down" />
              </summary>
              <div className="mt-3">
                <p>Our clients are paramount in our mission. We are dedicated to comprehending their distinct requirements, delivering bespoke solutions that align with their objectives, and ensuring their success is our top priority.</p>
              </div>
            </details>
          </div>
          <div className='values border border-gray-300 rounded-md p-4'>
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer p-1 rounded-md">
                Collaborative innovation
                <FontAwesomeIcon icon="angle-down" />
              </summary>
              <div className="mt-3">
                <p>Our clients are paramount in our mission. We are dedicated to comprehending their distinct requirements, delivering bespoke solutions that align with their objectives, and ensuring their success is our top priority.</p>
              </div>
            </details>
          </div>
        </div>
        
        {/* Right Section */}
        <div className='w-full max-w-[60%] p-4'>
          <h3 className='mb-4'>Forging lasting bonds: Nurturing trust, integrity, and success for both clients and team.</h3>
          <div className='flex flex-col lg:flex-row justify-between items-start'>
            <p className='mb-4 lg:mr-9'>We uphold the utmost standards, ensuring excellence from conceptualizations to execution across all facets of our operations. Attention to detail, precision, and an unwavering dedication to quality distinguish our work. We cultivate an environment that fosters curiosity and promotes professional growth.</p>
            <p>Through our investments in team development, we guarantee they deliver the latest insights and skills to our clients. Mindful of our societal impact, we strive for positivity. From adopting sustainable business practices to actively engaging with communities, we are committed to contributing to the greater good.</p>
          </div>
          <button className='border border-[#524d4d] my-8'>learn more <span className='arrow'></span></button>
        </div>
      </div>
    </div>
  )
}

export default Values;
