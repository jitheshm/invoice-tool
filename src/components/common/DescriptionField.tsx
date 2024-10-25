import { onTextAreaChange } from '@/types/EventTypes'
import React from 'react'

type InputProps = {
    className?: string,
    placeholder?: string,
    inputClass?: string
    value: string
    onChange: onTextAreaChange
}

function DescriptionField({ className = '', placeholder = '', inputClass = '', value, onChange }: InputProps) {
    return (
        <>
            <div className={`px-2 pt-1 min-h-[90px] ${className}`}>
                <textarea className={`w-full min-h-[90px]  ${inputClass}`} value={value} placeholder={placeholder} onChange={onChange} />
            </div>
        </>
    )
}

export default DescriptionField