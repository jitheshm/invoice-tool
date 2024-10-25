import React from 'react'

type InputProps = {
    className?: string,
    type: string,
    inputClass?: string
    value?: string
    placeholder?: string
}

function InputField({ className, type, inputClass, value = '', placeholder }: InputProps) {
    return (
        <>
            <div className={`px-2 py-1 ${className} ${type === 'date' ? '!w-[18%]' : ''}`}>
                <input
                    type={type}
                    className={`w-full  ${inputClass}`}
                    value={value}
                    placeholder={placeholder}
                />
            </div>
        </>
    )
}

export default InputField