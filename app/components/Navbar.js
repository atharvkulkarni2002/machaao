import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <>

      <nav className="border-gray-200 dark:border-gray-200 bg-gray-200" style={{width:"100%",paddingLeft:"7%"}}>
        <div className='flex p-8'>
          <img src="/assets/user.png" alt="UserIcon" className='w-16 h-16 userIcon'/>
          <div className='ml-4 LocationHolder'>
            <div>Deliver To</div>
            <div className='flex' style={{width:"100px"}}>
              <img src="/assets/location.png" alt="" className='w-4 h-4 mt-1.5 locationIcon'/>
              <span className='text-lg font-bold text-black-900'>My Home</span>
            </div>
          </div>
          <div className='flex Icons' style={{position:'absolute',right:"15%"}}>
            <div className='p-2 rounded-lg mr-8 border-gray-300 border-2 '><img src="/assets/bell.png" alt="" className='w-12 h-12 bellIcon'/></div>
            <div className='p-2 rounded-lg border-gray-300 border-2'><img src="/assets/shopping-cart.png" alt="" className='w-12 h-12 cartIcon'/></div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar