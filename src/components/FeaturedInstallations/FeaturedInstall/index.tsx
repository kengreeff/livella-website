import NextImage from 'next/image'
import { FaStar } from "react-icons/fa"

import HeadingThree from '@/components/HeadingThree'
import HeadingFour from '@/components/HeadingFour'

type FeaturedInstallProps = {
  children: React.ReactNode,
  imageUrl: string,
  title: string,
}

const FeaturedInstall = (props: FeaturedInstallProps) => {
  const { children, imageUrl, title } = props

  return (
    <div className="flex flex-col">
      <div className="relative" style={{ aspectRatio: '3/4' }}>
        <NextImage
          fill
          src={imageUrl}
          alt={title}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <HeadingThree>
        {title}
      </HeadingThree>

      <div className="flex mt-4">
        <FaStar style={{ marginRight: 8 }} />
        <FaStar style={{ marginRight: 8 }} />
        <FaStar style={{ marginRight: 8 }} />
        <FaStar style={{ marginRight: 8 }} />
        <FaStar />
      </div>

      <HeadingFour>
        Mona Vale, NSW
      </HeadingFour>

      <p className="mt-4">
        {children}
      </p>
    </div>
  )
}

export default FeaturedInstall
