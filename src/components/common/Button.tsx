import { OnClick } from '@/types/EventTypes'
import React from 'react'

type ButtonProps = {
    className?: string
    icon?: React.ReactElement
    name: string
    iconClass?: string
    onClick: OnClick
}
function Button({ className = '', icon, name, iconClass = '', onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className={` bg-[#6450c2] text-white rounded-full flex justify-center items-center hover:bg-[#E9605A] ${className}`}>
            <span className={iconClass}>
                {icon}
            </span>
            {name}
        </button>
    )
}

export default Button