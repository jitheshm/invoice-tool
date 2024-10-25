import React from 'react'
import FileInput from './FileInput'
import InputField from './common/InputField'
import InputGroup from './common/InputGroup'
import DescriptioGroup from './common/DescriptionGroup'
import ItemTable from './Tables/ItemTable'
import Button from './common/Button'

function Landing() {
    return (
        <div className='sm:p-4'>
            <div className='border border-[#eeeeee] shadow-sm w-full min-h-screen  p-5 rounded-xl'>
                <div>
                    <FileInput />
                    <div className='flex flex-col gap-2'>
                        <InputGroup type='text'>
                            <div className='w-[30px] flex-shrink-0 flex-grow-0 border-[#ffca58] border-solid border-[1px] text-center text-[#495057]'>#</div>
                        </InputGroup>
                        <InputGroup type='date' />
                        <InputGroup type='date' />
                    </div>
                </div>

                <div className='mt-14'>
                    <div>
                        {/* <InputField className='border-[#ffca58] border-solid border-[1px]' /> */}
                        <DescriptioGroup placeholder='Who is this invoice from?' inputValue='Invoice from' />
                        <DescriptioGroup placeholder='Who is this invoice to?' inputValue='Invoice to' />
                    </div>
                </div>

                <div className='mt-6'>
                    <ItemTable />
                </div>

                <div>

                    <div>
                        <DescriptioGroup placeholder='Terms and conditions - late fees, payment methods, delivery schedule' inputValue='Terms' />
                        <DescriptioGroup placeholder='Thank you for your business' inputValue='Foot Note' />

                    </div>

                    <div className='ps-16 mt-4'>
                        <InputGroup type='text' FclassName='w-[120px]' />

                        <div className='w-full flex'>
                            <InputGroup type='text' FclassName='w-[120px]' LclassName='rounded-e-none' />
                            <div className='w-10 mt-2 border-[#ffca58] border-solid border-[1px] border-s-[0.5px] rounded-e-full flex justify-center items-center'>
                                <p className='text-center'>%</p>
                            </div>
                        </div>
                        <div className='flex w-full justify-between mt-6 font-bold'>
                            <p>Total</p>
                            <p>0</p>
                        </div>

                        <div className='mt-4'>
                            <InputGroup type='text' FclassName='w-[120px]' />
                        </div>
                        <div className='mt-4'>
                            <InputGroup type='text' FclassName='w-[120px]' />
                        </div>
                    </div>


                </div>



                <div className='mt-4'>
                    {/* buttons goes here */}
                    <div className='flex flex-wrap w-1/2 mx-auto p-2 justify-center items-center gap-1'>
                        <Button name='Download PDF' className='text-xl px-2 p-2 w-fit rounded-md' /> 
                        <Button name='Clear' className='text-md px-3 p-2 w-fit rounded-md bg-[#F8F9FA] text-black' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing