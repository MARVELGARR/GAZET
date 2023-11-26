
import type { Metadata } from 'next'
import DesktopSidebar from '@/components/MarvelComponents/sideBarComponents/desktopSidebar'
import ReduxProvider from '@/redux/redux-provider/Provider'


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
    <ReduxProvider>

      <div className="h-full w-full gap-6 bg-gray-200  px-10 pt-5  flex  items-center">
        <DesktopSidebar/>
        {children}
        
      </div>
    </ReduxProvider>

  )
}
