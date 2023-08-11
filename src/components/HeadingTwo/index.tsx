import { Nanum_Myeongjo } from 'next/font/google'

const nanumMyeongjo = Nanum_Myeongjo({
  display: 'swap',
  subsets: ['latin'],
  weight: '400'
})

type HeadingTwoProps = {
  children: React.ReactNode,
  className?: string,
}

console.log('here', nanumMyeongjo)

const HeadingTwo = (props: HeadingTwoProps) => {
  const { children, className = '' } = props

  return (
    <h2
      className={`max-w-4xl text-5xl leading-tight tracking-normal mt-20 ${className}`}
      style={{ ...nanumMyeongjo.style }}
    >
      {children}
    </h2>
  )
}

export default HeadingTwo
