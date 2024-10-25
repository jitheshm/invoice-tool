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
            <div className={`px-2 pt-1 min-h-[90px] ${className}`}>
                <textarea className={`w-full min-h-[90px]  ${inputClass}`} value={value} placeholder={placeholder} />
            </div>
        </>
    )
}

export default DescriptionField