import React, { useEffect, useState } from 'react'
import Owner from "../images/owner.png";
import gal from "../assets/gallery.json";
import Navbar from './navbar'
function About() {
  const images = [
    './buyers/b1.webp',
    './buyers/b2.jpeg',
    './buyers/b3.jpeg',
    './buyers/b4.jpg',
    './buyers/b0.jpg',
    './buyers/b5.webp',
    './buyers/b6.jpeg'

  ];
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (currentImageIndex != 3) {
  //       goToNextImage()
  //     };
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [])
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const goToPrevImage = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  // const goToNextImage = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     (prevIndex + 1) % images.length
  //   );
  // }
  return (
    <div>
      <Navbar />
      <div className='bg-blue-400'>
        <div className='bg-black flex justify-around items-center p-5 flex-wrap' >
          <img src={Owner} alt="Owner" className='rounded-full w-96 ' />
          <div className='bg-black flex flex-col '>
            <h1 className='bg-slate-100 text-lg p-3 font-semibold rounded-md'>
              As the founder of Total Water Solution, I understand the vital role that clean and sustainable water plays in the success of industries. With years of experience in the field, our team is equipped to address a diverse range of challenges and provide innovative solutions that maximize efficiency and minimize environmental impact.
              Our mission is simple yet powerful: to ensure that your business has access to top-tier water treatment technologies and services. From water purification and filtration to waste management and process optimization, we're here to guide you every step of the way.
              Explore our comprehensive range of services that cater to various industries. Whether you're in pharmaceuticals, manufacturing, or any other sector, we have the expertise to enhance your water management strategies. Our solutions are designed to not only meet industry standards but to exceed them, ensuring your operations run smoothly while upholding sustainability principles.
              Feel free to explore our website to learn more about our services, projects, and success stories. If you have any questions or specific requirements, don't hesitate to get in touch. Your success is our success, and we're dedicated to forging lasting partnerships that drive growth and prosperity.
            </h1>
            <h1 className='text-slate-100 text-lg  font-semibold  m-1 w-max'>Nadish Dabral</h1>
            <h1 className='text-slate-100 text-lg  font-semibold  m-1 w-max '>Founder, Total Water Solution</h1>
          </div>
        </div>
      </div>
      <div className='bg-slate-100 flex flex-col'>
        <h1 className='text-white bg-[#7BB2DB] text-2xl text-center font-semibold p-2'>Gallery</h1>
        <div className='flex flex-wrap justify-center'>
          {
            gal.map(pic => (
              <img src={pic.image} alt="img" className=' w-80 h-80 m-2' />
            ))
          }
        </div>
        <div>
          <h1 className='text-white bg-[#7BB2DB] text-2xl text-center font-semibold p-2 mt-2' >Our Industries Partners</h1>
         <div className='bg-slate-200 flex flex-wrap justify-center p-4'>
          {
            images.map(pic => (
              <img src={pic} alt="img" className=' w-52 h-44 m-2 rounded-full' />
            ))
          }
         </div>
        </div>
      </div>
    </div>
  )
}

export default About
