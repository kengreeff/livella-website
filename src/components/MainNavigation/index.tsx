import NextLink from 'next/link'
import { Karla } from 'next/font/google'

import ContentWrapper from "@/components/ContentWrapper"
import Logo from "@/components/Logo"

const karla = Karla({ subsets: ['latin'], weight: '500' })

const MainNavigation = () => {
  return (
    <div className="w-full flex text-gray-100 items-center bg-black h-24 p-8 xl:p-0">
      <ContentWrapper>
        <Logo />

        <ul
          className="hidden lg:inline-flex ml-auto uppercase text-md tracking-wide"
          style={{ ...karla.style }}
        >
          <li>
            <NextLink href="/">
              Home
            </NextLink>
          </li>

          <li>
            <NextLink className="ml-6" href="/about">
              About Us
            </NextLink>
          </li>

          <li>
            <NextLink className="ml-6" href="/products">
              Products
            </NextLink>
          </li>

          <li>
            <NextLink className="ml-6" href="/installers">
              Installers
            </NextLink>
          </li>

          <li>
            <NextLink className="ml-6" href="/support">
              Help & Support
            </NextLink>
          </li>
        </ul>
      </ContentWrapper>
    </div>
  )
}

export default MainNavigation
