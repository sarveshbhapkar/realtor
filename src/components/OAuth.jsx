import React from 'react';
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button className='flex items-center justify-center bg-red-700 px-7 py-3 text-white
     w-full uppercase font-medium text-sm hover:bg-red-800 active:bg-red-900 rounded  hover:text-red-600'>
        <FcGoogle className='text-2xl bg-white rounded-full mr-2' />
        Continue with Google
    </button>
  )
}
