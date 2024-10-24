import React from 'react'
import FileInput from './FileInput'
import InputField from './common/InputField'
import InputGroup from './common/InputGroup'
import DescriptioGroup from './common/DescriptionGroup'

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
            </div>
        </div>
    )
}

export default Landing