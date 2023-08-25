import React from 'react'
function Topproductcard(props) {
  return (
    <div>
    <div className="relative m-10 w-full p-4 max-w-xs max-h-96 overflow-y-scroll rounded-lg bg-slate-200 shadow-md hover:bg-white ">
    <img width={700} height={700} className="h-60 rounded-t-lg object-contain" src={props.pimage} alt="product image" />
    <h1 className='font-bold text-lg'>{props.name}</h1>
    <h1 className='font-semibold text-md'>{props.desc}</h1>
  </div>
    </div>
  )
}

export default Topproductcard
