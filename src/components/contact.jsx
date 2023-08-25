import React from 'react'
import Navbar from './navbar'
import f1 from '../images/facebook.svg'
import i1 from '../images/instagram.svg'
import l1 from '../images/linkedin.svg'
import l2 from '../images/icons8-phone-50.png'
import c2 from '../images/contact2.png'


function Contact() {
  return (
    <>
      <Navbar />
      <img src={c2} alt="logo" className='w-screen h-72' />
      <div className='bg-contact bg-cover max-h-max p-3 '>
      <div className='flex flex-wrap sm: justify-center items-center '>
        <div className=' bg-slate-100 m-10 p-5 flex flex-col '>
           <h1 className='text-2xl font-semibold'>Connect with us on our social media.</h1>
          <div className='flex'>
            <a href="https://www.facebook.com/profile.php?id=100057398600404" target='_blank' rel="noreferrer"><img src={f1} alt='error'className='m-3' /></a>
            <a href="https://www.instagram.com/" target='_blank' rel="noreferrer"><img src={i1}alt='error' className='m-3' /></a>
            <a href="https://www.linkedin.com/in/total-water-solution-959b49224/" target='_blank' rel="noreferrer"><img src={l1} alt='error'className='m-3' /></a>
          </div>
          <h1 className='flex items-center'><img src={l2} alt='error' className='w-10 h-10 m-2' /><a href="tel:96253-87782" className=' text-xl font-semibold text-black  hover:text-blue-700'>96253-87782</a></h1>
        </div>
        <div className='overflow-auto lg:flex justify-center items-center' >
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1710.7434465341114!2d76.8249295!3d30.9568921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f86b0ac28010f%3A0xac033e594f73b0a5!2sTOTAL%20WATER%20SOLUTION-%20Industrial%20RO%20in%20Baddi%2C%20RO%20Plant%20Manufacturer%2C%20Softener%20Plant%20Manufacturer%2CETP%20%26%20STP%20Manufacturer%2C%20RO%20Spare%20Parts%20Dealer%2C%20RO%20repair%2C%20Industrial%20RO%20Repair%20in%20Baddi!5e0!3m2!1sen!2sin!4v1691702238475!5m2!1sen!2sin" height={500} width={500} loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='m-2' ></iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.290433994432!2d76.82738791003757!3d30.399500674641395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fba648d18e00d%3A0xcf27011c581c8d23!2sTotal%20Water%20Solution!5e0!3m2!1sen!2sin!4v1692650578017!5m2!1sen!2sin" width="500" height="500"  allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      </div>
      
    </>

  )
}

export default Contact
