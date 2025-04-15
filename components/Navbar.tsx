import { NAV_LINKS } from '@/constants'
import { link } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href="/" className='font-bold text-green-700 text-4xl'>
            Kashmir Travels
        </Link>

        <ul className='hidden h-full gap-12 lg:flex'>
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className = "regular-16 text-gray-50 flexCentre cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className='hidden lg:flexCenter'>
                <Button type="button" title="Login" icon="/user.svg" variant='btn_dark_green'/>
            </div>

            <Image src="menu.svg" alt="menu" width={32} height={32} className='incline-block cursor-pointer lg:hidden'/>

    </nav>
  )
}

export default Navbar