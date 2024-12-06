'use client'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
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
        <Link href={'/dashboard'}>
        <li className={`'hover:text-primary  cursor-pointer transition-all'
          ${path == '/dashboard' && 'text-primary font-extrabold'}
          `}>DashBoard</li>
        </Link>
        <Link href={'/dashboard/contact'}>
        <li className={`'hover:text-primary  cursor-pointer transition-all'
          ${path == '/dashboard/contact' && 'text-primary font-extrabold'}
          `}>Contact Us</li>
        </Link>

        <Link href={'/dashboard/upgrade'}>
        <li className={`'hover:text-primary  cursor-pointer transition-all'
          ${path == '/dashboard/upgrade' && 'text-primary font-extrabold'}
          `}>Upgrade</li>
        </Link>
        
      </ul>
      <UserButton/>
    </div>
  )
}

export default Header
