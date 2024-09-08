import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex justify-evenly bg-slate-600  h-16 p-4  '>
        <Link href="\">Home</Link>
        <Link href="\About">About</Link>
        <Link href="\Address">Address</Link>
        <Link href="\Contact">Contact</Link>
    </div>
  )
}

export default Header
