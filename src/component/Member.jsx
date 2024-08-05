import React from 'react'
import manhar from "../assets/manhar.png"
import avadhesh from "../assets/avadhesh2.png"



const Member = () => {
  return (
    <div className='max-width mx-auto'>
    <div className='flex justify-between items-center my-9'> 
        <div className='max-w-[40%] m-auto'>
            <h2>Excellence driven, client-centric focus</h2>
            <p>Expertise coupled with a client-centric ethos forms the cornerstone of our approach. Our team serves as the backbone of our achievements, with each member contributing uniquely to craft the outstanding experiences we provide. Together, with a diverse range of talents and viewpoints, we foster a dynamic atmosphere of innovation.</p>

            <button className='border border-[#524d4d] my-8'>meet all members <span className='arrow'></span></button>
        </div>
        <div className=' border '>
            <div className='images flex justify-start   items-end border border-black  max-w-[25%]  h-full'>
                <img className=' ' src={manhar} alt="" />
                <img className='' src={avadhesh} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Member