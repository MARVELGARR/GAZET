import ReduxProvider from "@/redux/redux-provider/Provider"

export const metadata = {
  title: 'sign in',
  description: 'Sign in page',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReduxProvider>

      <div>{children}</div>
    </ReduxProvider>
  )
}
