import ReduxProvider from '@/redux/redux-provider/Provider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'sign up',
  description: '',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReduxProvider>

      <div className="h-screen w-full bg-gray-200 flex justify-center items-center">
        {children}
      </div>
    </ReduxProvider>

  )
}
