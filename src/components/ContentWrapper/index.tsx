import { twMerge } from "tailwind-merge"

type ContentWrapperProps = {
  children: React.ReactNode,
  className?: string,
}

const ContentWrapper = (props: ContentWrapperProps) => {
  const { children, className } = props

  return (
    <div className={twMerge("container flex max-w-7xl", className)}>
      {children}
    </div>
  )
}

export default ContentWrapper
