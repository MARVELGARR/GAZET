import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ReduxProvider from '@/redux/redux-provider/Provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: '',
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
          <div className="h-full w-full bg-gray-200 flex items-center">
            {children}
          </div>
        </body>
      </ReduxProvider>
    </html>
  )
}
