import React from 'react'
import InputField from './InputField'
import { OnChange } from '@/types/EventTypes'
import { IError } from '@/lib/features/errors/errorSlice'

type InputProp = {
  children?: React.ReactElement
  type: string,
  fClassName?: string
  lClassName?: string
  fOnChange: OnChange
  lOnChange?: OnChange
  fValue: string
  lValue: string | number
  error?: IError

}

function InputGroup({ children, type, fClassName, lClassName, fOnChange, lOnChange, fValue, lValue, error }: InputProp) {
  return (
    <div>
      <div className='flex mt-2 w-full'>
        <InputField className={`w-[224px] ${fClassName} flex-shrink-0 flex-grow-0 border-[#ffca58] border-solid border-[1px] border-e-[0.5px] rounded-s-full`} type='text' inputClass='focus:outline-black' onChange={fOnChange} value={fValue} />
        {children}
        <InputField className={`flex-grow border-[#ffca58] border-solid border-[1px] border-s-[0.5px] rounded-e-full ${lClassName}`} type={type} inputClass='outline-none text-[#495057]' onChange={lOnChange} value={lValue} />
      </div>

      {
        error && <div className="text-red-600 text-sm">{error.label as string | undefined ? error.label as string + ' &' : ''}  {error.value as string | undefined ?? ''}</div>

      }
    </div>
  )
}

export default InputGroup