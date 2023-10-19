type FieldLabelProps = {
  children: React.ReactNode,
  htmlFor: string,
}

const FieldLabel = (props: FieldLabelProps) => {
  const { children, htmlFor } = props

  return (
    <label
      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}

export default FieldLabel
