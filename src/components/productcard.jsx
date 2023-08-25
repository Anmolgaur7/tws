import React from 'react'
function Productcard(props) {
  return (
    <div>
    <div className="relative m-10 w-full p-10 max-w-xs overflow-hidden rounded-lg bg-slate-200 shadow-md hover:bg-white ">
    <img width={700} height={700} className="h-60 rounded-t-lg object-contain" src={props.pimage} alt="product image" />
  </div>
    </div>
  )
}

export default Productcard
