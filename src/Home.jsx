import React from 'react'
import logo from "./assets/logo.png";
import heroImg from "./assets/herobg.svg";
import building from "./assets/building.png";
import arrow from "./assets/arrow.svg";
import img3 from "./assets/ashok-kandhari.png";
import img1 from "./assets/jaguar.png";
import img2 from "./assets/Minsyst.png";
import img4 from "./assets/landRover.png";
import img5 from "./assets/bombay_berlinn.png";
import img6 from "./assets/Oaknet-hc.png";
import img7 from "./assets/Trejhara.png";
import img8 from "./assets/zeniumCables.png";
import img9 from "./assets/aurionpro.png";
import collegue from "./assets/team.jpg"
import manhar from "./assets/manhar.png"
import avadhesh from "./assets/avadhesh2.png"
import images1 from "./assets/Multicom.png";
import images2 from "./assets/xcible.png"
import images3 from "./assets/Platinum.png"
import herobg from "./assets/heroinner.jpg";

const Home = () => {
  return (
      <div className=''>

        {/* nav  */}
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

        {/* hero */}
        <div className='max-width  py-[2em]'>
            <div className='flex justify-between items-center'>
                <div className='leading-normal'>
                    <h4 className='font-light text-sm' >BEST IN THE INDUSTRY</h4>
                    <div className=''><h1 className='text-[70px] '>Your Gateway to </h1> <h1> <span className='heading'> Next-Gen IT Solutions</span></h1></div>
                </div>
                <div className='max-w-[30%]'>
                    <p>Imagine an IT partner that speaks your language and prioritises your success. That's Ariantech Solutions. We deliver exceptional, custom-crafted solutions to propel your business forward.</p>

                    <button className='border border-[#524d4d] mt-[1em]'>explore more <span className='arrow'></span></button>
                </div>
            </div>

            <div className="border border-black">
                <img src={heroImg} alt="" />
                {/* <img src={herobg} alt="" /> */}
            </div>

            <div className='flex justify-between items-center my-[1em]'>
                <div className='max-w-[50%]'>
                    <h2>Unleash Your Ideas and Explore...</h2>
                    <p>Embark on an innovation journey with us as we revolutionize strategies with groundbreaking concepts.Our unwavering commitment to user-centric application interfaces ensures intuitive usability and transformative experiences, guiding you towards unparalleled success in the digital landscape. Join us as we revolutionize the way you approach innovation and unlock the full potential of your vision.</p>
                    <h1 className='text-[70px]'>100 <span className='text-[#de4441]'>%</span></h1>
                    <h5 className='font-light'>Total satisfied clients</h5>
                </div>
                <div className='className= max-w-[30%]'>
                    <img src={building} alt="" />
                </div>
            </div>

            <div className='flex justify-between items-center my-[2em] py-[1em] border'>
                <div className='max-w-[70%]'>
                    <h2>Customised solutions</h2>
                    <p>Beyond project completion, we stand steadfast, offering ongoing support and fine-tuning to meet your evolving needs. Our dedication extends beyond delivery to ensure your continued success.</p>
                </div>
                <div>
                    <button className='button'>explore more <span className='arrow'></span></button>
                </div>
            </div>

            {/* card */}

            <div>
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

            {/* our client */}

            <div className='text-center'>
                <h2>Our Clients</h2>
                <p>Explore the companies we've collaborated with, showcasing the expertise of our developers, designers, engineers, and strategists in driving business growth & propelling numerous companies to new heights.</p> <p>Here are some of the esteemed organizations we've had the privilege to work with.</p>
            </div>

            <div className='flex floting'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
            </div>

            <div>
                <img src={collegue} alt="" />
            </div>

            <div>
                <div>
                    <h2>Excellence driven, client-centric focus</h2>
                    <p>Expertise coupled with a client-centric ethos forms the cornerstone of our approach. Our team serves as the backbone of our achievements, with each member contributing uniquely to craft the outstanding experiences we provide. Together, with a diverse range of talents and viewpoints, we foster a dynamic atmosphere of innovation.</p>

                    <button className='border border-[#524d4d]'>meet all members <span className='arrow'></span></button>
                </div>
                <div>
                    <img src={manhar} alt="" />
                    <img src={avadhesh} alt="" />
                </div>
            </div>

            <div className='flex'>
                <div>
                    <div className='values'>
                        <h2>Our values</h2>
                        <a href="">
                            <h4>Customer-centric philosoph</h4>
                            <p>Our clients are paramount in our mission. We are dedicated to comprehending their distinct requirements, delivering bespoke solutions that align with their objectives, and ensuring their success is our top priority.</p>
                        </a>
                    </div>
                    <div className='values'>
                        <h2>Ethical foundation</h2>
                        <a href="">
                            <h4>Customer-centric philosoph</h4>
                            <p>Our clients are paramount in our mission. We are dedicated to comprehending their distinct requirements, delivering bespoke solutions that align with their objectives, and ensuring their success is our top priority.</p>
                        </a>
                    </div>
                    <div className='values'>
                        <h2>Collaborative innovation</h2>
                        <a href="">
                            <h4>Customer-centric philosoph</h4>
                            <p>Our clients are paramount in our mission. We are dedicated to comprehending their distinct requirements, delivering bespoke solutions that align with their objectives, and ensuring their success is our top priority.</p>
                        </a>
                    </div>
                </div>
                <div>
                    <h2>Forging lasting bonds: Nurturing trust, integrity, and success for both clients and team.</h2>
                    <p>We uphold the utmost standards, ensuring excellence from conceptualizations to execution across all facets of our operations. Attention to detail, precision, and an unwavering dedication to quality distinguish our work. We cultivate an environment that fosters curiosity and promotes professional growth.</p>
                    <p>Through our investments in team development, we guarantee they deliver the latest insights and skills to our clients. Mindful of our societal impact, we strive for positivity. From adopting sustainable business practices to actively engaging with communities, we are committed to contributing to the greater good.</p>
                    <button className='border border-[#524d4d]'>learn more <span className='arrow'></span></button>
                </div>
            </div>

            <div className='bg-[#fbf5fa] rounded m-2 flex justify-center'>
                <div>
                    <img src={img3} alt="" />
                </div>
                <div>
                    <h2>We are extremely satisfied with the knowledge & understanding of Ariantech's team. They have always been cooperative and have efficiently managed our program.</h2>
                    
                    <div className='flex justify-between'>
                        <h5 className='border-2 border-[#fbf5f] rounded-2xl px-[1em]'>Mr.Ashok Khandar</h5>
                        <h6>MD, Multicom Group (UAE, Bahrain & Egypt).</h6>
                    </div>
                </div>
            </div>

            {/* our project */}
            <div>
                <div>
                    <h2>Our Projects</h2>
                    <p>Each project we undertake is not just a task; it's an opportunity to innovate, to push boundaries, and to inspire success.</p>
                </div>
                <div className='flex'>
                    <img src={images1} alt="" />
                    <img src={images2} alt="" />
                    <img src={images3} alt="" />
                </div>
            </div>

        </div>




    </div>

    // hero
    


  )
}

export default Home