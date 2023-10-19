import Script from 'next/script'

import { Karla } from 'next/font/google'
import type { Metadata } from 'next'

import ApolloWrapper from '@/components/ApolloWrapper'

import './globals.css'

const karla = Karla({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Livella Floor Heating - Australia and New Zealand',
  description: 'Livella designs, supplies and installs affordable floor heating systems across Australia and New Zealand',
}

type RootLayoutProps = {
  children: React.ReactNode,
}

function RootLayout(props: RootLayoutProps) {
  const { children } = props

  return (
    <html lang="en">
      <body className={karla.className}>
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
      </body>

      {/* <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`}
      /> */}
    </html>
  )
}

export default RootLayout
