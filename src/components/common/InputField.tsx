import React from 'react'

type InputProps = {
    className?: string,
    type: string,
    inputClass?: string
    value?:string
}

function InputField({ className, type, inputClass,value='' }: InputProps) {
    return (
        <>
            <div className={`px-2 py-1 ${className}`}>
                <input type={type} className={`w-full  ${inputClass}`} value={value} />
            </div>
        </>
    )
}

export default InputField