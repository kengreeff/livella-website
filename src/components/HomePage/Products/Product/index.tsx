type ProductProps = {
  children: React.ReactNode,
  className?: string,
}

const Product = (props: ProductProps) => {
  const { children, className } = props

  return (
    <div className={`font-bold w-full py-4 ${className}`}>
      {children}
    </div>
  )
}

export default Product
