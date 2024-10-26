import { OnChange } from '@/types/EventTypes'
import React from 'react'

type InputProps = {
    className?: string,
    type: string,
    inputClass?: string,
    value: string | number | undefined,
    placeholder?: string,
    onChange?: OnChange,
    onBlur?: OnChange,
}

function InputField({ className, type, inputClass, value, placeholder, onChange, onBlur }: InputProps) {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (type === 'number' && !/[0-9]/.test(e.key) && !['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
            e.preventDefault();
        }
    };

    return (
        <div className={`px-2 py-1 ${className} ${type === 'date' ? '!w-[18%]' : ''}`}>
            <input
                type={type}
                min={type === 'number' ? "0" : undefined} // Prevent negative numbers
                className={`w-full ${inputClass}`}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default InputField;
