import { twMerge } from "tailwind-merge"

type ButtonProps = {
  as?: 'a' | 'button',
  buttonStyle?: 'primary' | 'secondaryWhite' | 'secondaryBlack',
  children: React.ReactNode,
  className?: string,
  disabled?: boolean,
  href?: string,
  onClick?: VoidFunction,
  style?: object,
  target?: string,
  type?: string,
}

const Button = (props: ButtonProps) => {
  const {
    as,
    buttonStyle,
    children,
    className,
    disabled = false,
    href,
    onClick,
    style,
    target = '_blank',
    type,
  } = props

  const ButtonElement = as || 'a'

  if (buttonStyle === 'secondaryWhite') {
    return (
      <ButtonElement
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
        disabled={disabled}
        href={href}
        onClick={onClick}
        rel="noopener noreferrer"
        style={style}
        target={target}
        type={type}
      >
        {children}
      </ButtonElement>
    )
  }

  if (buttonStyle === 'secondaryBlack') {
    return (
      <ButtonElement
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
        disabled={disabled}
        href={href}
        onClick={onClick}
        rel="noopener noreferrer"
        style={style}
        target={target}
        type={type}
      >
        {children}
      </ButtonElement>
    )
  }

  return (
    <ButtonElement
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
      disabled={disabled}
      href={href}
      onClick={onClick}
      rel="noopener noreferrer"
      style={style}
      target={target}
      type={type}
    >
      {children}
    </ButtonElement>
  )
}

export default Button
