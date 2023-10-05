import { twMerge } from "tailwind-merge"

type KeyFeatureProps = {
  button?: React.ReactNode,
  children: React.ReactNode,
  className?: string,
  icon: React.ReactNode,
  title: string,
}

const KeyFeature = (props: KeyFeatureProps) => {
  const { button, children, className, icon, title } = props

  return (
    <div className={twMerge("flex flex-col grow items-center px-4", className)}>
      <span>
        {icon}
      </span>

      <h3 className="font-bold text-xl text-center mt-6">{title}</h3>

      <p className={twMerge("text-center mt-4", button ? 'mb-8' : undefined)}>
        {children}
      </p>

      {!!button && (
        <div className="mt-auto">
          {button}
        </div>
      )}
    </div>
  )
}

export default KeyFeature
