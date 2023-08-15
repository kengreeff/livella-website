type QuestionProps = {
  children: React.ReactNode,
  className?: string,
}

const Question = (props: QuestionProps) => {
  const { children, className } = props

  return (
    <div className={`font-bold w-full py-4 ${className}`}>
      {children}
    </div>
  )
}

export default Question
