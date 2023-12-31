import { twMerge } from "tailwind-merge"

import { Nanum_Myeongjo } from 'next/font/google'

const nanumMyeongjo = Nanum_Myeongjo({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
})

type HeadingThreeProps = {
  children: React.ReactNode,
  className?: string,
}

const HeadingThree = (props: HeadingThreeProps) => {
  const { children, className = '' } = props

  return (
    <h3
      className={twMerge(`
        max-w-4xl
        text-2xl
        lg:text-3xl
        leading-tight
        tracking-normal
        mt-8
      `, className)}
      style={{ ...nanumMyeongjo.style }}
    >
      {children}
    </h3>
  )
}

export default HeadingThree
