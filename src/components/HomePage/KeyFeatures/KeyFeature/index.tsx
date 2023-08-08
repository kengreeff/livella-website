type KeyFeatureProps = {
  children: React.ReactNode,
  icon: React.ReactNode,
  title: string,
}

const KeyFeature = (props: KeyFeatureProps) => {
  const { children, icon, title } = props

  return (
    <div className="flex flex-col items-center">
      <span>
        {icon}
      </span>

      <h3 className="font-bold text-xl text-center mt-6">{title}</h3>
      <p className="text-center mt-4">{children}</p>
    </div>
  )
}

export default KeyFeature
