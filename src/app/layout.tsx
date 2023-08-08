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
    </html>
  )
}

export default RootLayout
