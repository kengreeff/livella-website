"use client"

import { useState } from 'react'
import { Karla } from 'next/font/google'

import ContentWrapper from "@/components/ContentWrapper"
import Logo from "@/components/Logo"

import MobileNavigation from "./MobileNavigation"

const karla = Karla({ subsets: ['latin'], weight: '500' })

const MainNavigation = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="w-full flex text-gray-100 items-center bg-black h-24 p-8 xl:p-0">
      <ContentWrapper className="items-center">
        <Logo />

        <div className="lg:hidden ml-auto">
          <button className="navbar-burger flex items-center white" onClick={() => setShowMenu(true)}>
            <svg className="block h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        {showMenu && (
          <MobileNavigation
            callbacks={{
              close: () => setShowMenu(false)
            }}
          />
        )}

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
              About
            </a>
          </li>

          <li>
            <a className="ml-6" href="/products">
              Products
            </a>
          </li>

          <li>
            <a className="ml-6" href="/pricing">
              Pricing
            </a>
          </li>

          <li>
            <a className="ml-6" href="/suppliers">
              Suppliers
            </a>
          </li>

          <li>
            <a className="ml-6" href="/support">
              Support
            </a>
          </li>
        </ul>
      </ContentWrapper>
    </div>
  )
}

export default MainNavigation
