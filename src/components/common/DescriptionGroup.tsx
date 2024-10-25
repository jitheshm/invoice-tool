import React from 'react'
import InputField from './InputField'
import DescriptionField from './DescriptionField'
import { OnChange, onTextAreaChange } from '@/types/EventTypes'

type InputProps = {
    placeholder: string
    labelValue: string
    textValue: string
    labelOnChange: OnChange
    textOnChange: onTextAreaChange

}
function DescriptionGroup({ placeholder, labelValue, textValue, labelOnChange, textOnChange }: InputProps) {
    return (
        <div className=' '>
            <InputField type='text' className='w-[211px]' value={labelValue} onChange={labelOnChange} />
            <DescriptionField className='w-full  border-[#ffca58] border-solid border-[1px] rounded-2xl mt-1' placeholder={placeholder} value={textValue} onChange={textOnChange} />

            {/* <InputField  type='text' inputClass='focus:outline-black'/> */}
        </div>
    )
}

export default DescriptionGroup