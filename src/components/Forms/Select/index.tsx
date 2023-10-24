import React from "react"
import { twMerge } from "tailwind-merge"

import type { ChangeEventHandler } from "react"

export type SelectProps = {
  children: React.ReactNode,
  className?: string,
  errorMessage?: string,
  id: string,
  onChange: (event: ChangeEventHandler<HTMLInputElement>) => void,
  placeholder?: string,
  required?: boolean,
  type?: "text" | "number",
  value: string,
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const {
    children,
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
      <div className="relative">
        <select
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
          ref={ref}
          required={required}
          type={type}
          value={value}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>

      {!!errorMessage && (
        <p className="text-red-500 text-xs italic">
          {errorMessage}
        </p>
      )}
    </>
  )
})

Select.displayName = 'Select'

export default Select
