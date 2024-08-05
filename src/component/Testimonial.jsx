import React from 'react'
import img3 from "../assets/ashok-kandhari.png";
// import arrow from "../assets/arrow.svg";

const Testimonial = () => {
  return (
    <div className='max-width rounded-3xl p-[1em] bg-gradient-to-r from-[#dfc2e0] to-[#faf1f6] border '>
        <div className='max-w-[1000px] mx-auto'>
            <div className=' rounded m-2 flex justify-between items-center py-7'>
                    <div className='w-full h-full border mr-9'>
                        <img className='rounded-3xl w-full' src={img3} alt="" />
                    </div>
                    <div>
                        <h3>We are extremely satisfied with the knowledge & understanding of Ariantech's team. They have always been cooperative and have efficiently managed our program.</h3>
                        {/* <img className='size-[30px] my-[1em]' src={arrow} alt="/" /> */}
                        
                        <div className='flex justify-between my-8'>
                            <h5 className=' border-black border-[1px] rounded-2xl px-[1em] font-normal'>Mr.Ashok Khandar</h5>
                            <h6>MD, Multicom Group (UAE, Bahrain & Egypt).</h6>
                        </div>
                    </div>
                    
                </div>
        </div>
    </div>
  )
}

export default Testimonial