type StatisticProps = {
  children: React.ReactNode,
  title: string,
}

const Statistic = (props: StatisticProps) => {
  const { children, title } = props

  return (
    <div className="text-center flex flex-col">
      <span className="text-5xl">
        {children}
      </span>

      <p className="mt-4">{title}</p>
    </div>
  )
}

export default Statistic
