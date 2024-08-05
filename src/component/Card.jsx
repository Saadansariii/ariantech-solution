import React from 'react'
import arrow from "../assets/arrow.svg";

const Card = () => {
  return (
            <div className='max-width'>
                <div className='flex justify-between mb-[2em]'>
                    <div className="card w-[32%] ">
                        <img className='size-[30px] my-[1em]' src={arrow} alt="" />
                        <h3 className='my-[1em]'><span>advanced AI and ML solutions</span></h3>
                        <div className='flex justify-between items-center'>
                            <h4>01</h4>
                            <p className='max-w-[60%]'>Elevating intelligence, empowering insights</p>
                        </div>
                    </div>
                    <div className="card w-[32%]">
                        <img className='size-[30px] my-[1em]' src={arrow} alt="" />
                        <h3 className='my-[1em]'><span>Robotic process automation (RPA)</span></h3>
                        <div className='flex justify-between items-center'>
                            <h4>02</h4>
                            <p className='max-w-[60%]'>Unlocking efficiency through automation</p>
                        </div>
                    </div>
                    <div className='card w-[32%]'>
                        <img className='size-[30px] my-[1em]' src={arrow} alt="" />
                        <h3 className='my-[1em]'><span>Application development</span></h3>
                        <div className='flex justify-between items-center'>
                            <h4>03</h4>
                            <p className='max-w-[60%]'>Innovating tomorrow's solutions, today</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='card w-[32%]'>
                    <img className='size-[30px] my-[1em]' src={arrow} alt="" />
                        <h3 className='my-[1em]'><span>Data analytics and insights</span></h3>
                        <div className='flex justify-between items-center'>
                            <h4>04</h4>
                            <p className='max-w-[60%] my-[1em]'>Transforming data into actionable insights</p>
                        </div>
                    </div>
                    <div className='card w-[32%]'>
                        <img className='size-[30px] my-[1em]' src={arrow} alt="" />
                        <h3 className='my-[1em]'><span>Mobile app development</span></h3>
                        <div className='flex justify-between items-center'>
                            <h4>05</h4>
                            <p className='max-w-[60%]'>Building tomorrow's apps today</p>
                        </div>
                    </div>
                    <div className='card w-[32%]'>
                        <img className='size-[30px] my-[1em]' src={arrow} alt="" />
                        <h3 className='my-[1em]'><span>ETL (Extract, Transform, Load)</span></h3>
                        <div className='flex justify-between items-center'>
                            <h4>06</h4>
                            <p className='max-w-[60%]'>Empower Your Data, Drive Your Future</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Card