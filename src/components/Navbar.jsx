import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
    <NavLink to="/">
        <div className='ml-5'>
            <img src='https://download.logo.wine/logo/O_Shopping/O_Shopping-Logo.wine.png' className='h-[8rem]'/>
        </div>
    </NavLink>
    <Link to="/cart">
        <div className='text-white'>
            <FiShoppingCart className="text-2xl"/>
        </div>
    </Link>
    </div>
  )
}

export default Navbar