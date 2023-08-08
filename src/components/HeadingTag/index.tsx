type HeadingTagProps = {
  children: React.ReactNode,
  colorScheme?: 'white' | 'black',
}

const HeadingTag = (props: HeadingTagProps) => {
  const { children, colorScheme = 'white' } = props

  return (
    <div className={`flex items-center text-${colorScheme}`}>
      <hr className={`border-${colorScheme} w-5 mr-4`} />
      {children}
    </div>
  )
}

export default HeadingTag
