import React from 'react'
// import logo from "./assets/logo.png";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
      <div className=' max'>
            <div className='flex justify-between margin items-center mx-10 py-[1em] '>
                <div className=' max-w-[12%]'>
                    <div className=''><img src={logo} alt="" /></div>
                </div>
                <div className=''>
                    <ul className='border border-[#dcdcdc] px-[2em] py-[.3em] rounded-3xl font-light'>
                        <li><a href=""><span className='ml-[1.8em]'>home</span></a></li>
                        <li><a href=""><span className='ml-[1.8em]'>company</span></a></li>
                        <li><a href=""><span className='ml-[1.8em]'>on demand solutions</span></a></li>
                        <li><a href=""><span className='ml-[1.8em]'>sarvices</span></a></li>
                        <li><a href=""><span className='ml-[1.8em]'>career</span></a></li>
                        <li><a href=""><span className='ml-[1.8em]'>reach us</span></a></li>
                    </ul>
                </div>  
            </div>
        </div>
  )
}

export default Navbar