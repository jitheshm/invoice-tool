import React from 'react'
import InputGroup from './common/InputGroup'

function InvoiceDetails() {
    return (
        <>
            <InputGroup type='text'>
                <div className='w-[30px] flex-shrink-0 flex-grow-0 border-[#ffca58] border-solid border-[1px] text-center text-[#495057]'>#</div>
            </InputGroup>
            <InputGroup type='date' />
            <InputGroup type='date' />
        </>
    )
}

export default InvoiceDetails