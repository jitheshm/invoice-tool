import React from 'react'
import InputField from './InputField'
import DescriptionField from './DescriptionField'

type InputProps = {
    placeholder?: string
    inputValue?:string
}
function DescriptioGroup({ placeholder,inputValue }: InputProps) {
    return (
        <div className=' '>
            <InputField type='text' className='w-[211px]' value={inputValue} />
            <DescriptionField className='w-full  border-[#ffca58] border-solid border-[1px] rounded-2xl mt-1' placeholder={placeholder} />

            {/* <InputField  type='text' inputClass='focus:outline-black'/> */}
        </div>
    )
}

export default DescriptioGroup