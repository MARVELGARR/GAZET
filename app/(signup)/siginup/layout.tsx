
import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'signup',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <div className="">
      {children}
    </div>
  )
}
