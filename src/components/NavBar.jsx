import React from 'react'
import NavBarItem from './NavBarItem'

export default function NavBar() {
  return (
    <div className='flex justify-center gap-4 p-4 bg-gray-800 text-white'>
        <NavBarItem title='Trending' param='trending'/>
        <NavBarItem title='Top Rated' param='rated'/>
        
        
  
    </div>
  )
}
