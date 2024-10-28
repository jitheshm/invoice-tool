"use client"
import React from 'react'
import Button from './common/Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { resetInvoice } from '@/lib/features/invoice/invoiceSlice'
import useAction from '@/hooks/componentHooks/useAction'

function Actions() {

    const invoiceData = useSelector((state: RootState) => state.invoice);
    const errors = useSelector((state: RootState) => state.errors);
    const dispatch = useDispatch()
    const { handleDownload } = useAction()




    return (
        <>
            <div className='flex flex-wrap w-1/2 mx-auto p-2 justify-center items-center gap-1'>
                <Button
                    disabled={invoiceData.logo.length > 0 ? false : true}
                    name='Download PDF'
                    className='text-xl px-2 p-2 w-fit rounded-md'
                    onClick={handleDownload}
                />
                <Button onClick={() => dispatch(resetInvoice())} name='Clear' className='text-md px-3 p-2 w-fit !rounded-md !bg-[#F8F9FA] !text-black' />
            </div>
        </>
    )
}

export default Actions