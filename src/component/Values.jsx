import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDown);


const Values = () => {
  return (
    <div className='max-width'>
        <div className='flex justify-between my-4'>
                <div className='max-w-[45%] '>
                        <h2 className=''>Our values</h2>
                    <div className='values my-4'>
                    
                        <details class="" open>
                                    
                            <summary class="flex items-center justify-between">
                                    Customer-centric Philosophy
                                    <FontAwesomeIcon icon="angle-down" />
                            </summary>
                            <div class="mt-3 ">
                            <p>Our clients are paramount in our mission. We are dedicated to comprehending their distinct requirements, delivering bespoke solutions that align with their objectives, and ensuring their success is our top priority.</p>
                            </div>
                        </details>
                    </div>
                    <div className='values my-[2em]'>
                        <details className='' open>
                        <summary class="flex items-center justify-between">
                            {/* <a href="/"> */}
                                Ethical foundation
                                <FontAwesomeIcon icon="angle-down" />
                            {/* </a> */}
                        </summary>
                            <p>Our clients are paramount in our mission. We are dedicated to comprehending their distinct requirements, delivering bespoke solutions that align with their objectives, and ensuring their success is our top priority.</p>
                        </details>      
                    </div>

                    <div className='values'>
                        <details>
                            <summary class="flex items-center justify-between">
                                {/* <a href="/"> */}
                                    Collaborative innovation
                                    <FontAwesomeIcon icon="angle-down" />
                                {/* </a> */}
                            </summary>

                                <p>Our clients are paramount in our mission. We are dedicated to comprehending their distinct requirements, delivering bespoke solutions that align with their objectives, and ensuring their success is our top priority.</p>
                        </details>
                    </div>
                        
                </div>
                <div className='max-w-[50%]'>
                    <h3 className='mb-4'> Forging lasting bonds: Nurturing trust, integrity, and success for both clients and team.</h3>
                    <div className='flex justify-between items-center'>
                        <p className='mr-9'>We uphold the utmost standards, ensuring excellence from conceptualizations to execution across all facets of our operations. Attention to detail, precision, and an unwavering dedication to quality distinguish our work. We cultivate an environment that fosters curiosity and promotes professional growth.</p>
                        <p>Through our investments in team development, we guarantee they deliver the latest insights and skills to our clients. Mindful of our societal impact, we strive for positivity. From adopting sustainable business practices to actively engaging with communities, we are committed to contributing to the greater good.</p>
                    </div>
                    <button className='border border-[#524d4d] my-8'>learn more <span className='arrow'></span></button>
                </div>
            </div>
    </div>
  )
}

export default Values