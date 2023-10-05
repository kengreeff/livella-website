import { scroller } from 'react-scroll'

import Button from "@/components/Button"
import ContactIcon from "@/components/Icons/Contact"
import ContentWrapper from "@/components/ContentWrapper"
import FAQIcon from "@/components/Icons/FAQ"
import ResourcesIcon from "@/components/Icons/Resources"

import KeyFeature from "@/components/KeyFeature"

const KeyFeatures = () => {
  return (
    <section className="w-full">
      <ContentWrapper>
        <div className="grid lg:grid-cols-3 gap-4 w-full py-12 px-8 lg:px-0">
          <KeyFeature
            button={
              <Button
                buttonStyle="secondaryWhite"
                onClick={() => scroller.scrollTo('faqs', {
                  duration: 800,
                  delay: 0,
                  smooth: 'easeInOutQuart'
                })}
              >
                Read FAQs
              </Button>
            }
            className="mb-8 lg:mb-0"
            icon={<FAQIcon height={60} width={60} />}
            title="Frequently Asked Questions"
          >
            Everything you wanted to know, all in one place.
          </KeyFeature>

          <KeyFeature
            button={
              <Button
                buttonStyle="secondaryWhite"
                onClick={() => scroller.scrollTo('downloads', {
                  duration: 800,
                  delay: 0,
                  smooth: 'easeInOutQuart'
                })}
              >
                Download Resources
              </Button>
            }
            className="mb-8 lg:mb-0"
            icon={<ResourcesIcon height={60} width={60} />}
            title="Resources"
          >
            Lost the instructions? Need detailed technical specifications?
          </KeyFeature>

          <KeyFeature
            button={
              <Button buttonStyle="secondaryWhite">
                Email Us Today
              </Button>
            }
            icon={<ContactIcon height={60} width={60} />}
            title="On Call or Online"
          >
            We are dedicated to being available and assisting our customers.
          </KeyFeature>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default KeyFeatures
