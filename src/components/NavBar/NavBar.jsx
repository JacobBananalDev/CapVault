import React from 'react'
import { CapVaultNavItems } from '../../constants/constants'

const NavBar = () => {
  return (
    <div className='flex flex-row min-w-full p-4 bg-black'>
      <nav className='hidden md:flex'>
        <ul className='flex flex-row items-center gap-4 font-bold'>
            {
                CapVaultNavItems.map((item, index) => (
                    <li key={index} className='border rounded-lg p-2'>{item.content}</li>
                ))
            }
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
