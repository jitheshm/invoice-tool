import React from 'react'

type ButtonProps = {
    className?: string
    icon: React.ReactElement
    name: string
}
function Button({ className, icon, name }: ButtonProps) {
    return (
        <div className={`${className} bg-[#6450c2] text-white rounded-full flex justify-center items-center hover:bg-[#E9605A]`}>
            {icon}
            {name}
        </div>
    )
}

export default Button