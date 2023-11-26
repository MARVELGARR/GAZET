import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ReduxProvider from '@/redux/redux-provider/Provider'
import MobileNav from '@/components/MarvelComponents/sideBarComponents/mobileNav'
import Hamburger from '@/components/MarvelComponents/sideBarComponents/hamburger'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'HomePage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ReduxProvider>

        <body className={inter.className}>
          <MobileNav/>
          <Hamburger/>
          {children}
        </body>
      </ReduxProvider>
    </html>
  )
}
