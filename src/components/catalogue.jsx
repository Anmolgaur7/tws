import Navbar from './navbar'
import data2 from '../assets/products.json'
import wl from '../images/whatsapp.png'
import Productcard from './productcard'
function Catalogue() {
  return (
    <div>
       <div className='flex items-center justify-center bg-slate-50 p-1 rounded-md'>
          <h1 className='text-blue-600 text-xl font-bold'>For any enquiries about any product :</h1>
          <button className='ml-1 bg-green-500 rounded-2xl text-base font-semibold text-center p-2 text-white animate-pulse'><a href="https://wa.me/9625387782/?text=I'm%20interested%20in" className='flex items-center'><img className='w-9 h-9' src={wl}/>Whatsapp us</a></button>
        </div>
      <Navbar/>
      <h1 className=' bg-sky-200  p-4 text-2xl font-semibold hover:bg-sky-100'>Explore our catalogue right here</h1>
      <div className=' flex flex-wrap justify-center items-center bg-catalogue bg-no-repeat bg-cover'>
      {
        data2.map(prod=>(
          <Productcard key={prod.id} pimage={prod.pimage}/>
        ))
      }
      </div>
     
    </div>
  )
}

export default Catalogue
