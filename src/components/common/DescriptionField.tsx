import React from 'react'

type InputProps = {
    className?: string,
    placeholder?: string,
    inputClass?: string
    value?: string
}

function DescriptionField({ className = '', placeholder = '', inputClass = '', value = '' }: InputProps) {
    return (
        <>
            <div className={`px-2 py-1 h-[110px] ${className}`}>
                <textarea className={`w-full h-full  ${inputClass}`} value={value} placeholder={placeholder} />
            </div>
        </>
    )
}

export default DescriptionField