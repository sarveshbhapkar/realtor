import React from 'react';
import { useLocation, useNavigate } from 'react-router';

export default function Header() {

  const navigate=useNavigate();
  const location =useLocation();
  
  function pathMatchRoute(route){
    if(route===location.pathname){
      return true
    }
  }

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <img src="https://s3.rea.global/_next/static/client/realtor/images/logo.png" alt="" 
          className='h-8 cursor-pointer'
          onClick={()=>navigate("/")}/>
        </div>

        <div>
          <ul className='flex space-x-10'>
            <li className={`py-3 text-sm font-semibold text-gray-400  border-b-[3px] border-b-transparent 
            ${pathMatchRoute("/") && "text-black border-b-red-500"}`}
            onClick={()=>navigate("/")}>Home</li>

            <li className={`py-3 text-sm font-semibold text-gray-400  border-b-[3px] border-b-transparent 
            ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}
            onClick={()=>navigate("/offers")}>Offers</li>

            <li className={`py-3 text-sm font-semibold text-gray-400  border-b-[3px] border-b-transparent 
            ${pathMatchRoute("/sign-In") && "text-black border-b-red-500"}`}
            onClick={()=>navigate("/sign-In")}>SignIn</li>
          </ul>
        </div>
      </header>
    </div>
  )
}
