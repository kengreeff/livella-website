type FieldHolderProps = {
  children: React.ReactNode,
}

const FieldHolder = (props: FieldHolderProps) => {
  const { children } = props

  return (
    <div>
      {children}
    </div>
  )
}

export default FieldHolder
