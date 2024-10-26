"use client"
import React, { useEffect } from 'react'
import Button from './common/Button'
import usePdf from '@/hooks/usePdf'
import { validateInvoice } from '@/lib/utils/validation'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { setErrors } from '@/lib/features/errors/errorSlice'

function Actions() {

    const invoiceData = useSelector((state: RootState) => state.invoice);
    const errors = useSelector((state: RootState) => state.errors);
    const { generateAndDownloadPdf } = usePdf()

    const dispatch = useDispatch()

    useEffect(() => {
        console.log(errors, "redux")
    }, [errors])


    const handleDownload = () => {
        console.log(invoiceData)
        const { errors } = validateInvoice(invoiceData);
        console.log(errors, "error")
        if (Object.keys(errors).length > 0) {
            dispatch(setErrors(errors))

            return;
        }

        setErrors({});
        generateAndDownloadPdf()
    }
    return (
        <>
            <div className='flex flex-wrap w-1/2 mx-auto p-2 justify-center items-center gap-1'>
                <Button
                    name='Download PDF'
                    className='text-xl px-2 p-2 w-fit rounded-md'
                    onClick={handleDownload}
                />
                <Button name='Clear' className='text-md px-3 p-2 w-fit !rounded-md !bg-[#F8F9FA] !text-black' />
            </div>
        </>
    )
}

export default Actions