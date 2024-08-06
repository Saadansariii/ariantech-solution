import React from 'react'

const Hero = () => {
  return (
    <div className='max-width'>
      <div className='max-width  py-[2em]'>
            <div className='flex justify-between items-center '>
                <div className='max-w-[50%] items-start'>
                    <h2>Unleash Your Ideas and Explore...</h2>
                    <p>Embark on an innovation journey with us as we revolutionize strategies with groundbreaking concepts.Our unwavering commitment to user-centric application interfaces ensures intuitive usability and transformative experiences, guiding you towards unparalleled success in the digital landscape. Join us as we revolutionize the way you approach innovation and unlock the full potential of your vision.</p>
                    <h1 className='text-[70px]'>100 <span className='text-[#de4441]'>%</span></h1>
                    <h5 className='font-light'>Total satisfied clients</h5>
                </div>
                <div className='hero1 items-end '>
                    <div className='bg-gradient-to-t from-[#e4a8af]  z-1  h-full w-full opacity-75'></div>
                    
                </div>
            </div>

            <div className='flex justify-between items-center my-[2em] py-[1em] '>
                <div className='max-w-[70%] w-1/2'>
                    <h2 className='mb-6'>Customised solutions</h2>
                    <p >Beyond project completion, we stand steadfast, offering ongoing support and fine-tuning to meet your evolving needs. Our dedication extends beyond delivery to ensure your continued success.</p>
                </div>
                <div>
                    <button className='border border-gray-300 py-[.5em] px-[1.5em] rounded-3xl'>explore more <span className='arrow'></span></button>
                </div>
            </div>
        </div>
            
    </div>
  )
}

export default Hero