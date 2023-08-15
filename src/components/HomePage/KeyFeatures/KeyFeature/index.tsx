import { twMerge } from "tailwind-merge"

type KeyFeatureProps = {
  children: React.ReactNode,
  className?: string,
  icon: React.ReactNode,
  title: string,
}

const KeyFeature = (props: KeyFeatureProps) => {
  const { children, className, icon, title } = props

  return (
    <div className={twMerge("flex flex-col items-center", className)}>
      <span>
        {icon}
      </span>

      <h3 className="font-bold text-xl text-center mt-6">{title}</h3>
      <p className="text-center mt-4">{children}</p>
    </div>
  )
}

export default KeyFeature
