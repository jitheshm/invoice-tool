import React from 'react'

type ButtonProps = {
    className?: string
    icon?: React.ReactElement
    name: string
    iconClass?: string
}
function Button({ className='', icon, name, iconClass='' }: ButtonProps) {
    return (
        <div className={` bg-[#6450c2] text-white rounded-full flex justify-center items-center hover:bg-[#E9605A] ${className}`}>
            <span className={iconClass}>
                {icon}
            </span>
            {name}
        </div>
    )
}

export default Button