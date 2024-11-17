'use client'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
  const path = usePathname()
  useEffect(() => {
    console.log(path);
  }, [])
  
  return (
    <div className='flex p-4 justify-around bg-secondary shadow-md items-center'>
      <Image src={"/interviewAI.svg"} width={150} height={100} alt='Logo'></Image>
      <ul className='hidden md:flex gap-5 items-center'>
        <li className={`'hover:text-primary  cursor-pointer transition-all'
          ${path == '/dashboard' && 'text-primary font-extrabold'}
          `}>DashBoard</li>
        <li className={`'hover:text-primary  cursor-pointer transition-all'
          ${path == '/dashboard/contact' && 'text-primary font-extrabold'}
          `}>Contact Us</li>
        <li className={`'hover:text-primary  cursor-pointer transition-all'
          ${path == '/dashboard/upgrade' && 'text-primary font-extrabold'}
          `}>Upgrade</li>
        <li className={`'hover:text-primary  cursor-pointer transition-all'
          ${path == '/dashboard/works' && 'text-primary font-extrabold'}
          `}>How It Works?</li>
      </ul>
      <UserButton/>
    </div>
  )
}

export default Header
