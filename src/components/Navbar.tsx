"use client"
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import Button from './common/Button';
import Link from 'next/link';
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <>
            <header className='flex p-5 justify-between items-center'>
                <div className='flex items-center lg:hidden'>
                    <button type="button" onClick={()=>setIsVisible(!isVisible)} className="text-gray-900  border border-black/10 px-3 py-1 rounded-md  text-center mb-2">
                        <RxHamburgerMenu className='text-4xl text-zinc-500' />
                    </button>
                </div>
                <div className='flex items-center justify-center'>
                    <img src="https://www.finline.in/assets/v3/img/finline-logo.png" alt="" className='h-8' />
                </div>

                <div className='flex items-center justify-center gap-2 hidden lg:flex'>
                    <Link href={'/login'}>
                        <Button className='w-24 h-8 text-lg p-5' name='Sign in' />
                    </Link>
                    <div className='flex items-center '>
                        english
                        <IoMdArrowDropdown />
                    </div>
                </div>



            </header>
            <div
                className={`w-full transform transition-transform duration-1000 ${
                    isVisible ? 'translate-y-0' : '-translate-y-full hidden'
                }`}
            >
                <div className='w-full'>
                    <Link href={'/login'}>
                        <Button className='w-full h-8 text-lg p-5' name='Sign in' />
                    </Link>
                </div>
                <div className='flex items-center'>
                    english
                    <IoMdArrowDropdown />
                </div>
            </div>
        </>
    )
}

export default Navbar