import React from "react"
import { twMerge } from "tailwind-merge"

import type { ChangeEventHandler } from "react"

export type InputProps = {
  className?: string,
  errorMessage?: string,
  id: string,
  onChange: (event: ChangeEventHandler<HTMLInputElement>) => void,
  placeholder?: string,
  required?: boolean,
  type?: "text" | "number",
  value: string,
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    errorMessage,
    id,
    onChange,
    placeholder,
    required = false,
    type = 'text',
    value,
  } = props

  return (
    <>
      <input
        autoComplete="off"
        className={
          twMerge(`
            appearance-none
            block
            w-full
            bg-gray-50
            text-gray-700
            border
            border-gray-200
            rounded
            py-3
            px-4
            mb-3
            leading-tight
            focus:outline-none
            focus:bg-white
          `, className, errorMessage ? 'border-red-500' : 'border-gray-200' )
        }
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        required={required}
        type={type}
        value={value}
      />

      {!!errorMessage && (
        <p className="text-red-500 text-xs italic">
          {errorMessage}
        </p>
      )}
    </>
  )
})

Input.displayName = 'Input'

export default Input
