import React from 'react'
import FileInput from './FileInput'
import ItemTable from './Tables/ItemTable'
import InvoiceDetails from './InvoiceDetails'
import InvoiceDescription from './InvoiceDescription'
import TermsAndFooter from './TermsAndFooter'
import DiscountAndShipping from './DiscountAndShipping'
import Actions from './Actions'

function Landing() {
    return (
        <div className='sm:p-4'>
            <div className='border border-[#eeeeee] shadow-sm w-full min-h-screen  p-5 rounded-xl'>
                <div className='flex flex-wrap justify-between'>
                    <div className=' w-full  md:w-2/5 md:pe-10 '>
                        <FileInput />
                    </div>
                    <div className='flex flex-col gap-2 w-full md:w-1/2'>
                        <InvoiceDetails />
                    </div>
                </div>
                <div className='mt-14 flex flex-wrap'>
                    <InvoiceDescription />
                </div>
                {/* <div className='mt-6'>
                    <ItemTable />
                </div>
                <div className='flex flex-wrap'>
                    <TermsAndFooter />
                    <DiscountAndShipping />
                </div>
                <div className='mt-4'>
                    <Actions />
                </div> */}
            </div>
        </div>
    )
}

export default Landing