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
            <a href="/">
              Home
            </a>
          </li>

          <li>
            <a className="ml-6" href="/about">
              About Us
            </a>
          </li>

          <li>
            <a className="ml-6" href="/products">
              Products
            </a>
          </li>

          <li>
            <a className="ml-6" href="/installers">
              Installers
            </a>
          </li>

          <li>
            <a className="ml-6" href="/support">
              Help & Support
            </a>
          </li>
        </ul>
      </ContentWrapper>
    </div>
  )
}

export default MainNavigation
