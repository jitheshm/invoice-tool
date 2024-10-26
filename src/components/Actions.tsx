"use client"
import React from 'react'
import Button from './common/Button'
import usePdf from '@/hooks/usePdf'

function Actions() {
    const { generateAndDownloadPdf } = usePdf()
    return (
        <>
            <div className='flex flex-wrap w-1/2 mx-auto p-2 justify-center items-center gap-1'>
                <Button
                    name='Download PDF'
                    className='text-xl px-2 p-2 w-fit rounded-md'
                    onClick={() => generateAndDownloadPdf()}
                />
                <Button name='Clear' className='text-md px-3 p-2 w-fit !rounded-md !bg-[#F8F9FA] !text-black' />
            </div>
        </>
    )
}

export default Actions