import { OnClick } from '@/types/EventTypes'
import React from 'react'

type ButtonProps = {
    className?: string
    icon?: React.ReactElement
    name?: string
    iconClass?: string
    onClick?: OnClick
    disabled?: boolean
}
function Button({ className = '', icon, name, iconClass = '', onClick, disabled = false }: ButtonProps) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`text-white rounded-full flex justify-center items-center ${disabled
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#6450c2] hover:bg-[#E9605A]' 
                } ${className}`}
        >
            <span className={iconClass}>
                {icon}
            </span>
            {name}
        </button>

    )
}

export default Button