import { OnChange } from '@/types/EventTypes'
import React from 'react'

type InputProps = {
    className?: string,
    type: string,
    inputClass?: string
    value: string
    placeholder?: string
    onChange: OnChange
}

function InputField({ className, type, inputClass, value, placeholder, onChange }: InputProps) {
    return (
        <>
            <div className={`px-2 py-1 ${className} ${type === 'date' ? '!w-[18%]' : ''}`}>
                <input
                    type={type}
                    className={`w-full  ${inputClass}`}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </div>
        </>
    )
}

export default InputField