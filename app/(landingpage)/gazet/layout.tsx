
import ReduxProvider from '@/redux/redux-provider/Provider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: '',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReduxProvider>

      <div className="h-full w-full">

        {children}
      </div>
    </ReduxProvider>


  )
}
