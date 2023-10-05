import { twMerge } from 'tailwind-merge'
import { Nanum_Myeongjo } from 'next/font/google'

const nanumMyeongjo = Nanum_Myeongjo({
  display: 'swap',
  subsets: ['latin'],
  weight: '400'
})

type HeadingOneProps = {
  children: React.ReactNode,
  className?: string,
}

const HeadingOne = (props: HeadingOneProps) => {
  const { children, className = '' } = props

  return (
    <h1
      className={twMerge(`max-w-4xl text-4xl lg:text-6xl leading-tight tracking-wide mt-8 lg:mt-20`, className)}
      style={{ ...nanumMyeongjo.style }}
    >
      {children}
    </h1>
  )
}

export default HeadingOne
