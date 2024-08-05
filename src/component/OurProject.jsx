import React from 'react'
import images1 from "../assets/Multicom.png";
import images2 from "../assets/xcible.png"
import images3 from "../assets/Platinum.png"

const OurProject = () => {
  return (
    <div className='max-width'>
        <div>
                    <h2>Our Projects</h2>
                    <p>Each project we undertake is not just a task; it's an opportunity to innovate, to push boundaries, and to inspire success.</p>
                </div>
                <div className='flex justify-between'>
                    <div className='project project1'>
                        <div className='bg-gradient-to-t from-[#e4a8af]  z-1  h-full w-full opacity-90'></div>
                        <div className='bg-gradient-to-t from-[#e4a8af]  z-1  h-full w-full opacity-90'>
                            <div className='bg-gray-100 opacity-50 m-[1em] rounded-2xl '>
                            <p className='p-[2em] font-light mt-auto'>
                            Key XCIBIL Application Features :
                            Credit Report : Now you can check the credit worth of your borrower before doing any money related transaction.
                            Record Transaction : One application to record all your money related transactions (Goods , Cash & Service).
                            Settlement Service : Borrow will settle the unpaid money on time to maintain or improve the credit score.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className='project project2'>
                        <div className='bg-gradient-to-t from-[#e4a8af]  z-1  h-full w-full opacity-90'></div>
                        <div className='bg-gradient-to-t from-[#e4a8af]  z-1  h-full w-full opacity-90'>
                            <div className='bg-gray-100 opacity-50 m-[1em] rounded-2xl '>
                                <p className='p-[2em] font-light '>Multicom ERP software is an enterprise application software which is operational in UAE , Egypt , Oman , Bahrain & Kenya; it allows organizations to use a system of integrated applications to manage business and automate most of back office functions related to technology, services and human resources.</p>
                            </div>
                        </div>
                    </div>
                    <div className='project project3'>
                        <div className='bg-gradient-to-t from-[#e4a8af]  z-1  h-full w-full opacity-90'>
                            <div className='bg-gray-100 opacity-50 m-[1em] rounded-2xl '>
                            <p className='p-[2em] font-light'>Platinum Garage Management System(GMS) is a fully automated cloud-based mobile & responsive web application for garage management with CMS successfully running in UAE.
                            Automobile companies can manage their whole garage system through this system and manage their website also.</p>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default OurProject