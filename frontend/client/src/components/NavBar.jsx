import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, XIcon } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

function NavBar() {
  const [open, setOpen] = useState(false)
  const { user } = useUser()
  const { openSignIn } = useClerk()

  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-36 py-5'>

      {/* Logo */}
      <Link to='/' className='max-md:flex-1'>
        <img src={assets.logo} alt="logo" className='w-36 h-auto' />
      </Link>

      {/* Menu */}
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 z-50 flex flex-col md:flex-row items-center
        max-md:justify-center gap-8 md:px-8 py-3 max-md:h-screen md:rounded-full backdrop-blur
        bg-black/70 md:bg-white/10 md:border border-gray-300/20 transition-all duration-300
        ${open ? 'max-md:w-full' : 'max-md:w-0 max-md:overflow-hidden'}`}
      >
        <XIcon
          onClick={() => setOpen(false)}
          className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer'
        />

        <Link to='/' onClick={() => setOpen(false)}>Home</Link>
        <Link to='/movies' onClick={() => setOpen(false)}>Movies</Link>
        <Link to='/' onClick={() => setOpen(false)}>Theaters</Link>
        <Link to='/' onClick={() => setOpen(false)}>Releases</Link>
        <Link to='/favorite' onClick={() => setOpen(false)}>Favorites</Link>
      </div>

      {/* Right section */}
      <div className='flex items-center gap-4'>
        <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer' />

        {!user ? (
          <button
            onClick={openSignIn}
            className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium'
          >
            Login
          </button>
        ) : (
          <UserButton />
        )}

        <MenuIcon
          onClick={() => setOpen(true)}
          className='md:hidden w-8 h-8 cursor-pointer'
        />
      </div>

    </div>
  )
}

export default NavBar
