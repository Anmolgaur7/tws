import React from 'react'
import des from '../images/design.png'
import des1 from '../images/design2.png'
import wl from '../images/whatsapp.png'
import name from '../images/name.png'
import Toproductcard from "./topproductcard";
import Navbar from './navbar';
import data from "../assets/topproducts.json";
function Home() {
  return (
    <div>
       <Navbar/>
      <div className="pt-16 pb-16 pr-16 min-h-[25rem] bg-home1 bg-cover bg-no-repeat flex items-center lg:min-h-[35rem]">
        <div id="dialog" className="rounded-r-lg  max-w-5xl animate-fadeinleft">
          <img src={name} alt="logo" />
        </div>
      </div>
      <h1 className="text-white bg-[#7BB2DB] text-3xl text-center font-semibold p-3">Services we offer</h1>
      <div className=" flex flex-col flex-wrap justify-center items-center p-8 text-center bg-services1 bg-no-repeat bg-cover ">
      
        <div className="flex flex-wrap sm: justify-center items-center">
          <ul className=" w-auto m-9">
            <li className="bg-sky-200 text-3xl font-semibold">Water Treatment Plants:</li>
            <li className="bg-sky-100 text-2xl font-medium">Revers Osmosis System</li>
            <li className="bg-sky-100 text-2xl font-medium">NANO Filtration System</li>
            <li className="bg-sky-100 text-2xl font-medium">Portable Water System</li>
            <li className="bg-sky-100 text-2xl font-medium">De-mineralization System </li>
            <li className="bg-sky-100 text-2xl font-medium">.Softener System</li>
            <li className="bg-sky-100 text-2xl font-medium">Gravity Sand Filter</li>
            <li className="bg-sky-100 text-2xl font-medium">Multi Grade Filter</li>
            <li className="bg-sky-100 text-2xl font-medium">Multi Media Filter</li>
            <li className="bg-sky-100 text-2xl font-medium">Pressure Sand Filter</li>
            <li className="bg-sky-100 text-2xl font-medium">Activated Carbon Filter</li>
            <li className="bg-sky-100 text-2xl font-medium">Dual Media Filter</li>
            <li className="bg-sky-100 text-2xl font-medium">Iron Removal Filter</li>
            <li className="bg-sky-100 text-2xl font-medium">Ultra Filtration</li>
          </ul>

          <ul className=" w-auto m-9">
            <li className="bg-sky-200 text-3xl font-semibold">Waste Water Treatment Plants:</li>
            <li className="bg-sky-100 text-2xl font-medium"> Anaerobic System</li>
            <li className="bg-sky-100 text-2xl font-medium">Anaerobic Hybrid Reactor</li>
            <li className="bg-sky-100 text-2xl font-medium">Up-flow Anaerobic Sludge Blanket</li>
            <li className="bg-sky-100 text-2xl font-medium">Low Rate Digester</li>
            <li className="bg-sky-100 text-2xl font-medium">Aerobic System</li>
            <li className="bg-sky-100 text-2xl font-medium">Moving Bed Bioreactor (MBBR)</li>
            <li className="bg-sky-100 text-2xl font-medium"> Membrane Bioreactor (MBR)</li>
            <li className="bg-sky-100 text-2xl font-medium">. Flash Mixer System</li>
            <li className="bg-sky-100 text-2xl font-medium">Flocculation System</li>
            <li className="bg-sky-100 text-2xl font-medium">Clarifier System</li>
            <li className="bg-sky-100 text-2xl font-medium">Tube Settler System</li>
            <li className="bg-sky-100 text-2xl font-medium">Decanter/Centrifuge/Fiter Pressure</li>
            <li className="bg-sky-100 text-2xl font-medium">CPI/DAF/O&WS</li>
          </ul>
        </div>
        <div className='flex items-center bg-slate-50 p-2 rounded-md'>
          <h1 className='text-blue-600 text-xl font-bold'>For any enquiries :</h1>
          <button className='ml-1 bg-green-400 rounded-3xl text-lg font-semibold text-center p-3 text-white hover:bg-green-300'><a href="https://wa.me/9625387782/?text=I'm%20interested%20in" className='flex items-center'><img className='w-9 h-9' src={wl}/>Whatsapp us</a></button>
        </div>
      </div>
    
      <div className=" flex flex-wrap   p-32 bg-sky-100  justify-center items-center lg:flex-nowrap" >
        <img src={des} alt='error' className=" w-80" />
        <h1 className="text-center text-5xl font-bold ">Empowering Industries with Sustainable Water Solutions.</h1>
        <img src={des1} alt='error' className=" w-80" />
      </div>
      <div className=" ">
        <h1 className="text-center p-4 text-3xl bg bg-[#7BB2DB] font-semibold">Our top products</h1>
        <div className="flex  justify-center items-center flex-wrap">
          {data.map(prod=>(
          <Toproductcard key={prod.id} pimage={prod.pimage} name={prod.name} desc={prod.desc}/>
        ))}
        </div>

      </div>
    </div>
  )
}

export default Home
