import React from 'react'
import DescriptioGroup from './common/DescriptionGroup'

function InvoiceDescription() {
    return (
        <>
            <div className='w-full md:w-1/2 md:px-2'>
                <DescriptioGroup placeholder='Who is this invoice from?' inputValue='Invoice from' />
            </div>
            <div className='w-full md:w-1/2 md:px-2'>
                <DescriptioGroup placeholder='Who is this invoice to?' inputValue='Invoice to' />
            </div>
        </>
    )
}

export default InvoiceDescription