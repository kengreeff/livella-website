import NextImage from 'next/image'
import HeadingThree from '@/components/HeadingThree'

type InstallationLocationProps = {
  children: React.ReactNode,
  imageUrl: string,
  title: string,
}

const InstallationLocation = (props: InstallationLocationProps) => {
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

      <p className="mt-2">
        {children}
      </p>
    </div>
  )
}

export default InstallationLocation
