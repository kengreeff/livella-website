import { twMerge } from "tailwind-merge"

type ButtonProps = {
  buttonStyle?: 'primary' | 'secondaryWhite' | 'secondaryBlack',
  children: React.ReactNode,
  className?: string,
  href?: string,
  onClick?: VoidFunction,
  style?: object,
  target?: string,
}

const Button = (props: ButtonProps) => {
  const { buttonStyle, children, className, href, onClick, style, target = '_blank' } = props

  if (buttonStyle === 'secondaryWhite') {
    return (
      <a
        className={
          twMerge(`
            border
            border-white
            cursor-pointer
            inline-flex
            px-8
            py-4
            rounded-3xl
            text-white
            text-sm
            tracking-widest
            uppercase
          `, className)
        }
        href={href}
        onClick={onClick}
        rel="noopener noreferrer"
        style={style}
        target={target}
      >
        {children}
      </a>
    )
  }

  if (buttonStyle === 'secondaryBlack') {
    return (
      <a
        className={
          twMerge(`
            border
            border-gray-400
            cursor-pointer
            px-8
            py-4
            rounded-3xl
            text-black
            text-sm
            tracking-widest
            uppercase
          `, className)
        }
        href={href}
        onClick={onClick}
        rel="noopener noreferrer"
        style={style}
        target={target}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      className={
        twMerge(`
          bg-livella-red
          cursor-pointer
          px-8
          py-4
          rounded-3xl
          text-white
          text-sm
          tracking-widest
          uppercase
        `, className)
      }
      href={href}
      onClick={onClick}
      rel="noopener noreferrer"
      style={style}
      target={target}
    >
      {children}
    </a>
  )
}

export default Button
