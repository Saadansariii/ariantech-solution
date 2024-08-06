import React from 'react'
// import collegue from "../assets/team.jpg"


const Collegue = () => {
  return (
    
        <div className='max-width'>
          <div className="collegue">
              <div className='bg-gradient-to-t from-[#e4a8af]  z-1  h-full w-full opacity-75 py-9 pr-9'>
                <div className=' text-white bg-gray-500 rounded-2xl  w-1/2 text-center ml-auto items-center px-[2em] py-[3em]'>
                  <h2 className='mb-4'>We are committed to being with you at every stage of your journey.</h2>
                  <p className=''>With a blend of expertise and passion, our certified team is devoted to sharing their deep-seated love for the ocean while prioritizing your safety every step of the way. </p>
                  <button className='border border-gray-400 mt-6'>explore more</button>
                </div>
              </div>
          </div>
                {/* <img src={collegue} alt="" /> */}
        </div>
  )
}

export default Collegue