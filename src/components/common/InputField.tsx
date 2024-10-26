import { OnChange } from '@/types/EventTypes'
import React from 'react'

type InputProps = {
    className?: string,
    type: string,
    inputClass?: string
    value: string | number
    placeholder?: string
    onChange?: OnChange
    onBlur?: OnChange
}

function InputField({ className, type, inputClass, value, placeholder, onChange, onBlur }: InputProps) {
    return (
        <>
            <div className={`px-2 py-1 ${className} ${type === 'date' ? '!w-[18%]' : ''}`}>
                <input
                    type={type}
                    className={`w-full  ${inputClass}`}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </div>
        </>
    )
}

export default InputField