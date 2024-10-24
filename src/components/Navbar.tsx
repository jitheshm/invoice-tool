import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
    return (
        <header className='flex p-5 justify-between items-center'>
            <div className='flex items-center'>
                <button type="button" className="text-gray-900  border border-black/10 px-3 py-1 rounded-md  text-center mb-2">
                    <RxHamburgerMenu className='text-4xl text-zinc-500' />
                </button>
            </div>
            <div className='flex items-center justify-center'>
                <img src="https://www.finline.in/assets/v3/img/finline-logo.png" alt="" className='h-8' />
            </div>

        </header>
    )
}

export default Navbar