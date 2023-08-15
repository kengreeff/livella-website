import { twMerge } from "tailwind-merge"

type HeadingTagProps = {
  children: React.ReactNode,
  className?: string,
  colorScheme?: 'white' | 'black',
  hrClassName?: string,
}

const HeadingTag = (props: HeadingTagProps) => {
  const { children, className, hrClassName, colorScheme = 'white' } = props

  return (
    <div className={twMerge(`flex items-center text-${colorScheme}`, className)}>
      <hr className={twMerge(`border-${colorScheme} w-5 mr-4`, hrClassName)} />
      {children}
    </div>
  )
}

export default HeadingTag
