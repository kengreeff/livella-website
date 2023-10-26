type LinkProps = {
  children: React.ReactNode,
  href: string,
}

const Link = (props: LinkProps) => {
  const { children, href } = props

  return (
    <li className="mb-1">
      <a
        className="
          block
          p-2
          text-md
          font-semibold
          text-gray-400
          hover:bg-blue-50
          hover:text-blue-600
          rounded
        "
        href={href}
      >
        {children}
      </a>
    </li>
  )
}

export default Link
