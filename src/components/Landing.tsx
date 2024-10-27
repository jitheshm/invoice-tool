import React from 'react'
import FileInput from './FileInput'
import ItemTable from './Tables/ItemTable'
import InvoiceDetails from './InvoiceDetails'
import InvoiceDescription from './InvoiceDescription'
import TermsAndFooter from './TermsAndFooter'
import DiscountAndShipping from './DiscountAndShipping'
import Actions from './Actions'
import { MdArrowForwardIos } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

function Landing() {
    return (
        <>
            <div className='sm:p-4'>
                <div className='border border-[#eeeeee] shadow-lg w-full min-h-screen  p-5 rounded-xl'>
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
                    <div className='mt-6'>
                        <ItemTable />
                    </div>
                    <div className='flex flex-wrap'>
                        <TermsAndFooter />
                        <DiscountAndShipping />
                    </div>
                    <div className='mt-4'>
                        <Actions />
                    </div>
                </div>

                <div className='flex justify-center items-center flex-col pt-20'>
                    <p>Get help from our experts. Drop us a WhatsApp message now!!</p>
                    <div className='mt-5'>
                        <MdArrowForwardIos />
                    </div>
                    <div className='mt-5 flex gap-3'>
                        <div className='w-20 h-10 rounded-2xl border border-[#09a183] text-2xl flex justify-center items-center text-[#09a11d]'>
                            <RiWhatsappFill />
                        </div>
                        <div className='w-20 h-10 rounded-2xl border border-[#e9605a] text-2xl flex justify-center items-center '>
                            <img src="https://www.finline.in/assets/v3/img/chat.png" className='w-10' alt="" />
                        </div>
                    </div>
                </div>

                <div className='h-96 w-full px-5'>
                    <div className='relative '>
                        <div className='bg-[#e9605a] min-h-96 top-9 w-full absolute rounded-2xl  pt-28 px-14'>
                            <div className='md:w-3/6 w-full'>
                                <div className='bg-white p-2 rounded-xl w-full'>
                                    <input type="text" className='w-full' placeholder='Full Name' />
                                </div>
                                <div className='flex md:mt-3 mt-2 flex-wrap justify-between'>
                                    <div className='md:w-1/2  w-full p-2'>
                                        <div className='bg-white p-2 rounded-xl w-full'>
                                            <input type="text" className='w-full' placeholder='Email'  />
                                        </div>
                                    </div>
                                    <div className='md:w-1/2 w-full p-2'>
                                        <div className='bg-white p-2 rounded-xl w-full'>
                                            <input type="text" className='w-full' placeholder='Phone Number' />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex md:mt-3 mt-2 flex-wrap justify-between'>
                                    <div className='md:w-1/2  w-full p-2'>
                                        <div className='bg-white p-2 rounded-xl w-full'>
                                            <input type="text" className='w-full' placeholder='Your location or address' />
                                        </div>
                                    </div>
                                    <div className='md:w-1/2 w-full p-2'>
                                        <div className='bg-white p-2 rounded-xl w-full'>
                                            <input type="text" className='w-full' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Landing