import React from 'react'
import InputField from './InputField'
import DescriptionField from './DescriptionField'
import { OnChange, onTextAreaChange } from '@/types/EventTypes'
import { IError } from '@/lib/features/errors/errorSlice'

type InputProps = {
    placeholder: string
    labelValue: string
    textValue: string
    labelOnChange: OnChange
    textOnChange: onTextAreaChange
    error?: IError


}
function DescriptionGroup({ placeholder, labelValue, textValue, labelOnChange, textOnChange, error }: InputProps) {
    return (
        <div>
            <div className=' '>
                <InputField type='text' className='w-[211px]' value={labelValue} onChange={labelOnChange} />
                <DescriptionField className='w-full  border-[#ffca58] border-solid border-[1px] rounded-2xl mt-1' placeholder={placeholder} value={textValue} onChange={textOnChange} />

                {/* <InputField  type='text' inputClass='focus:outline-black'/> */}
            </div>
            {
                error && <div className="text-red-600 text-sm">{error.label as string | undefined ? error.label as string + ' &' : ''}  {error.value as string | undefined ?? ''}</div>

            }
        </div>
    )
}

export default DescriptionGroup