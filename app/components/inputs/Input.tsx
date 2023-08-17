'use client'

import {
    UseFormRegister,
    FieldValues,
    FieldErrors,
    ValidationRule,
} from 'react-hook-form'
import toast from 'react-hot-toast'
interface InputProps {
    id: string
    label: string
    type?: string
    disabled?: boolean
    register: UseFormRegister<FieldValues>
    required?: boolean
    errors: FieldErrors
    validation?: ValidationRule | any
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type,
    disabled,
    register,
    required,
    errors,
    validation,
}) => {
    return (
        <div className="relative w-full">
            <input
                id={id}
                type={type}
                disabled={disabled}
                {...register(id, { required, ...validation })}
                placeholder=" " // empty for now to make cool animation
                className={`peer mt-[2px] w-full rounded-md border-2 bg-white p-4 pb-2 pl-4 pt-6 font-light outline-none transition disabled:cursor-not-allowed disabled:opacity-70
                    ${errors[id] ? 'border-red-500' : 'border-neutral-300'}
                    ${
                        errors[id]
                            ? 'focus:border-red-500'
                            : 'focus:border-black'
                    }
                `}
            />
            <label
                htmlFor={id}
                className={`text-md absolute left-4 top-5 z-10 origin-[0] -translate-y-3 transform duration-150
                    peer-placeholder-shown:translate-y-0 
                    peer-placeholder-shown:scale-100
                    peer-focus:mb-2
                    peer-focus:-translate-y-4
                    peer-focus:scale-75
                    ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}

                `}
            >
                {label}
            </label>
            <div className="text-sm text-rose-500">
                {errors[id]?.type === 'required' && (
                    <p role="alert">{label} is required</p>
                )}
                {label === 'email' && errors[id]?.type === 'pattern' && (
                    <p role="alert" className="text-rose-500">
                        {label} format is not valid
                    </p>
                )}
                {/* name have no number  */}
                {label === 'name' && errors[id]?.type === 'pattern' && (
                    <p role="alert" className="text-rose-500">
                        Only letters allowed
                    </p>
                )}
                {errors[id]?.type === 'minLength' && (
                    <p role="alert" className="text-rose-500">
                        {label} length must be at least 6 characters
                    </p>
                )}
            </div>
        </div>
    )
}

export default Input
