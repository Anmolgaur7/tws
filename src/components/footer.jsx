import React from 'react'
import img1 from '../images/logo.png'
import loc from '../images/loc.png'
import email from '../images/email.png'
import phone from '../images/phone.png'
function footer() {
  return (
    <>
    <div className='flex bg-gray-900 text-black p-10 justify-between items-center  flex-wrap'>
       <img src={img1} alt="logo" className='w-32 h-32  rounded-full' /> 

       <div className='  flex flex-col bg-slate-100 p-5 rounded-md'>
        <a href="tel:96253-87782" className=' text-lg font-semibold flex  items-center  hover:text-blue-400'><img src={phone} className='mr-1 w-16 h-16'/>96253-87782</a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=salesservice.tws@gmail.com"><h1 className=' text-xl font-bold flex  items-center hover:text-blue-400 '><img src={email} className='mr-1 w-16 h-16'  /><p className='flex overflow-auto '>salesservice.tws@gmail.com</p></h1></a>
        
        <a className='flex justify-center items-center' href="https://goo.gl/maps/aE5ZaRLZ2o9A1hHv8"> <h1 className='flex text-lg font-semibold justify-center items-center font-bold hover:text-blue-400'><img className='mr-1 w-16 h-16' alt='error' src={loc} />Shop No. 03, Vill. Bhatauli Khurd, Vardhman Road, Baddi, Dist. Solan H.P-173205</h1></a>
        
       </div>
    </div>
    </>
  )
}

export default footer
