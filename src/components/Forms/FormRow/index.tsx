import { twMerge } from "tailwind-merge"

type FormRowProps = {
  children: React.ReactNode,
  className?: string,
}

const FormRow = (props: FormRowProps) => {
  const { children, className } = props

  return (
    <div
      className={
        twMerge(`
          flex
          flex-wrap
          -mx-3
          mb-6
        `, className)
      }
    >
      {children}
    </div>
  )
}

export default FormRow
