import React from 'react'
import InputField from './InputField'

type InputProp = {
  children?: React.ReactElement
  type:string
}

function InputGroup({ children,type }: InputProp) {
  return (
    <div className='flex mt-2'>
      <InputField className='w-[224px] flex-shrink-0 flex-grow-0 border-[#ffca58] border-solid border-[1px] border-e-[0.5px] rounded-s-full' type='text' inputClass='focus:outline-black'/>
      {children}
      <InputField className='flex-grow border-[#ffca58] border-solid border-[1px] border-s-[0.5px] rounded-e-full' type={type} inputClass='outline-none text-[#495057]' />
    </div>
  )
}

export default InputGroup