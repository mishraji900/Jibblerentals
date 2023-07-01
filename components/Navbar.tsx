import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButtton from './CustomButtton'
import { headers } from 'next/dist/client/components/headers'
const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href='/' className='flex justify-center item-center'>
                <Image src='/logo.svg'
                alt='logo'
                width={118}
                height={18}
                className='object-contain'/>
            </Link>
            <CustomButtton
                  title='Sign In' 
                  btnType={'button'}
                  containerStyles='text-primary-blue rounded-full bg-white min-w-[130px] border border-primary-blue hover:text-white hover:bg-primary-blue hover:border hover:border-white'/>
        </nav>
    </header>
  )
}

export default Navbar
