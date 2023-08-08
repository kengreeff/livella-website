import NextLink from 'next/link'
import { Karla } from 'next/font/google'

import ContentWrapper from "@/components/ContentWrapper"
import Logo from "@/components/Logo"

const karla = Karla({ subsets: ['latin'], weight: '500' })

const MainNavigation = () => {
  return (
    <div className="w-full flex text-gray-100 items-center bg-black h-24 max-xl:p-4">
      <ContentWrapper>
        <Logo />

        <ul className={`inline-flex ml-auto uppercase ${karla.className} text-md tracking-wide`}>
          <li>
            <NextLink href="/home">
              Home
            </NextLink>
          </li>

          <li>
            <NextLink className="ml-6" href="/about">
              About Us
            </NextLink>
          </li>

          <li>
            <NextLink className="ml-6" href="/home">
              Products
            </NextLink>
          </li>

          <li>
            <NextLink className="ml-6" href="/home">
              Installers
            </NextLink>
          </li>

          <li>
            <NextLink className="ml-6" href="/faq">
              Help & Support
            </NextLink>
          </li>
        </ul>
      </ContentWrapper>
    </div>
  )
}

export default MainNavigation
