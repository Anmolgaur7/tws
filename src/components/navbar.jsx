import React from 'react'
import {Link} from "react-router-dom";
import logo from '../images/logo.png'
function Navbar() {
  return (
      <div className="flex p-2 justify-center items-center border rounded-sm flex-wrap overflow-auto lg:justify-start ">
        <Link to="/"><img src={logo} className=" ml-4 w-24 max-h-24 lg:w-28"/></Link>
        <ul className="flex items-center flex-wrap lg:ml-96   ">
         <Link to="/"><li className="text-xl font-bold m-2  active:text-blue-500 text-blue-600 lg:m-4">Home</li></Link>
         <Link to="/about"><li className="text-xl font-bold m-2  active:text-blue-500 text-blue-600 lg:m-4 ">About</li></Link>
         <Link to="/catalogue"><li className="text-xl font-bold m-2  active:text-blue-500 text-blue-600 lg:m-4 ">Catalogue</li></Link>
         <Link to="/contact"><li className="text-xl font-bold m-2  active:text-blue-500 text-blue-600 lg:m-4 ">Contact</li></Link> 
        </ul>
      </div>
  )
}

export default Navbar 
