import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {


 


  return (
    <div className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
    <NavLink to="/">
        <div className='ml-5'>
            <img src='https://bbopokertables.idevaffiliate.com/templates/logo/8d984ae3eb726157ce3ca8b21814cb97.png' className='h-[2rem]'/>
        </div>
    </NavLink>
    <Link to="/cart">
        <div className='text-white' >
            <FiShoppingCart className="text-2xl"/>
        </div>
    </Link>

    
    </div>
  )
}

export default Navbar