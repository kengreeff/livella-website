import { twMerge } from "tailwind-merge"

type InputProps = {
  className?: string,
  errorMessage?: string,
  id: string,
  placeholder?: string,
  type?: "text" | "number",
}

const Input = (props: InputProps) => {
  const { className, errorMessage, id, placeholder, type = 'text' } = props

  return (
    <>
      <input
        className={
          twMerge(`
            appearance-none
            block
            w-full
            bg-gray-200
            text-gray-700
            border
            border-red-500
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
        type={type}
        placeholder={placeholder}
      />

      {!!errorMessage && (
        <p className="text-red-500 text-xs italic">
          {errorMessage}
        </p>
      )}
    </>
  )
}

export default Input
