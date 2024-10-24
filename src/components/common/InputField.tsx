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
            <div className={`px-2 py-1 ${className}`}>
                <input
                    type={type}
                    className={`w-full ${type === 'date' ? 'w-20' : ''} ${inputClass}`}
                    value={value}
                    placeholder={placeholder}
                />
            </div>
        </>
    )
}

export default InputField