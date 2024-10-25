import React from 'react'
import InputGroup from './common/InputGroup'
import Button from './common/Button'
import { VscDiffAdded } from "react-icons/vsc";


function DiscountAndShipping() {
    return (
        <>
            <div className='ps-16 md:ps-40 mt-4 w-full md:w-1/2'>
                <InputGroup type='text' FclassName='!w-[120px]' />

                <div className='flex flex-wrap'>
                    <Button name='Discounts' className='text-md px-2 p-2 w-fit !bg-transparent !text-[#e9605a] hover:bg-transparent hover:cursor-pointer hover:underline ' icon={<VscDiffAdded />} iconClass='text-[#AAAAAA] mx-2' />
                    <Button name='Shipping' className='text-md px-2 p-2 w-fit !bg-transparent !text-[#e9605a] hover:bg-transparent hover:cursor-pointer hover:underline ' icon={<VscDiffAdded />} iconClass='text-[#AAAAAA] mx-2' />
                </div>


                <div className='w-full flex'>
                    <InputGroup type='text' FclassName='!w-[120px]' LclassName='rounded-e-none' />
                    <div className='w-10 mt-2 border-[#ffca58] border-solid border-[1px] border-s-[0.5px] rounded-e-full flex justify-center items-center'>
                        <p className='text-center'>%</p>
                    </div>
                </div>
                <div className='flex w-full justify-between mt-6 font-bold'>
                    <p>Total</p>
                    <p>0</p>
                </div>

                <div className='mt-4'>
                    <InputGroup type='text' FclassName='!w-[120px]' />
                </div>
                <div className='mt-4'>
                    <InputGroup type='text' FclassName='!w-[120px]' />
                </div>
            </div>
        </>
    )
}

export default DiscountAndShipping