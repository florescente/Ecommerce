import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { SessionProvider } from 'next-auth/react'
import Layout from '../stories/Layout'

globalStyles()

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  console.log(session)
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
