import React from 'react'

export default function Navbar() {
  return (
    <nav className=" flex flex-col lg:flex-row justify-between mx-6 py-3">

    <div className='text-2xl font-bold text-gray-600' >
        <h1>{new Date().toUTCString().slice(0,16)}</h1>
        <h1 className=''>Foody.com</h1>
    </div>
    <div className="nav-right">
    <input type="serch" name='search' placeholder='Search Here...' autoComplete='off'

    className=' p-3 w-full lg:w-[46vw] outline-none border border-gray-500 rounded-lg mt-4'
    />
    </div>
    </nav>
  )
}





