import ContentWrapper from "@/components/ContentWrapper"
import HeadingTwo from "@/components/HeadingTwo"

import DownloableResource from './DownloadableResource'

export type DownloadableResource = {
  file: {
    url: string,
  },
  sys: {
    id: string,
  },
  title: string,
}

type DownloadableResourcesProps = {
  downloadableResources?: DownloadableResource[],
}

const DownloadableResources = (props: DownloadableResourcesProps) => {
  const { downloadableResources = [] } = props

  return (
    <section className="w-full p-8 lg:p-16" id="downloads">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <HeadingTwo className="mt-0">
            Downloadable Resources
          </HeadingTwo>

          <p className="mt-8">
            Looking for an instruction manual or installation details or technical specifications? 
            We&apos;ve got a whole host of resources for trade installers and customers. Whether you&apos;ve 
            lost the instruction manual or you&apos;re installing for the first time. Download them here.
          </p>

          <div className="flex flex-col mt-8">
            {downloadableResources.map((faq) => (
              <DownloableResource
                className="border-b"
                fileUrl={faq.file?.url}
                key={faq.sys.id}
                title={faq.title}
              />
            ))}
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default DownloadableResources
