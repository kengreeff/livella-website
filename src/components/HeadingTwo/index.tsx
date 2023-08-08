import { Nanum_Myeongjo } from 'next/font/google'

const nanumMyeongjo = Nanum_Myeongjo({ subsets: ['latin'], weight: '400' })

type HeadingTwoProps = {
  children: React.ReactNode,
  className?: string,
}

const HeadingTwo = (props: HeadingTwoProps) => {
  const { children, className } = props

  return (
    <div
      className={`${className} max-w-4xl text-5xl leading-tight tracking-normal mt-20`}
      style={{ ...nanumMyeongjo.style }}
    >
      {children}
    </div>
  )
}

export default HeadingTwo
