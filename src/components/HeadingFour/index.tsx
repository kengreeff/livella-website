import { Nanum_Myeongjo } from 'next/font/google'

const nanumMyeongjo = Nanum_Myeongjo({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
})

type HeadingFourProps = {
  children: React.ReactNode,
  className?: string,
}

const HeadingFour = (props: HeadingFourProps) => {
  const { children, className = '' } = props

  return (
    <h4
      className={`max-w-4xl text-xl leading-tight tracking-normal mt-8 ${className}`}
      style={{ ...nanumMyeongjo.style }}
    >
      {children}
    </h4>
  )
}

export default HeadingFour
