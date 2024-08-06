import React from 'react'
import manhar from "../assets/manhar.png"
import avadhesh from "../assets/avadhesh2.png"

const Member = () => {
  return (
    <div className='max-width mx-auto'>
      <div className='flex justify-between items-center my-9'>
        <div className='w-1/2 p-4 items-start'>
          <h2 className='mb-6'>Excellence driven, client-centric focus</h2>
          <p>Expertise coupled with a client-centric ethos forms the cornerstone of our approach. Our team serves as the backbone of our achievements, with each member contributing uniquely to craft the outstanding experiences we provide. Together, with a diverse range of talents and viewpoints, we foster a dynamic atmosphere of innovation.</p>
          <button className='border border-[#524d4d] my-8'>meet all members <span className='arrow'></span></button>
        </div>
        <div className='w-1/2 p-4'>
          <div className='flex justify-start items-end'>
            <img className='w-[300px] rounded-lg h-[400px] object-cover' src={manhar} alt="Manhar" />
            <img className='w-[300px] rounded-lg h-[400px] object-cover ml-4' src={avadhesh} alt="Avadhesh" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Member;
