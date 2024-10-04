import React from 'react'
import { CapVaultNavItems } from '../../constants/constants'
import { FaShoppingBag, FaSun, FaUser } from 'react-icons/fa'
import { IoMenu } from 'react-icons/io5'

const NavBar = () => {
  return (
    <div className='flex flex-row min-w-full p-2 bg-gray-600 justify-between items-center text-white'>

      <div className='flex flex-row'>
        <span className='font-extrabold text-2xl'>CAP</span>
        <span className='font-medium text-2xl'>Vault</span>
      </div>


      <nav className='hidden md:flex'>
        <ul className='flex flex-row gap-4 font-bold'>
          {
            CapVaultNavItems.map((item, index) => (
              <li key={index} className=''>{item.content}</li>
            ))
          }
        </ul>
      </nav>

      <div className='md:flex flex-row hidden'>
        <button className='p-2 border border-transparent rounded-lg hover:border-blue-700 hover:text-blue-900 hover:bg-blue-400'><FaSun size={21} /></button>
        <button className='p-2 border border-transparent rounded-lg hover:border-blue-700 hover:text-blue-900 hover:bg-blue-400'><FaUser size={21} /></button>
        <button className='p-2 border border-transparent rounded-lg hover:border-blue-700 hover:text-blue-900 hover:bg-blue-400'><FaShoppingBag size={21} /></button>
      </div>

      <div className='flex flex-row md:hidden'>
        <button className='p-2 border border-transparent rounded-lg hover:border-blue-700 hover:text-blue-900 hover:bg-blue-400'><IoMenu size={21} /></button>
      </div>

    </div>
  )
}

export default NavBar
