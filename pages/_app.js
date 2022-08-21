import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Provider } from 'react-redux'

import Layout from '../layouts'
import { useStore } from '../store'

import '../styles/animate.css'
import '../styles/components/button.css'
import '../styles/components/dropdown.css'
import '../styles/components/forms.css'
import '../styles/components/modals.css'
import '../styles/components/navbar.css'
import '../styles/components/nprogress.css'
import '../styles/components/skeleton.css'
import '../styles/global.css'
import '../styles/layout.css'
import '../styles/tailwind.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="msapplication-TileColor" content="#050707" />
        <meta name="msapplication-TileImage" content="/icons/mstile-150x150.png" />
        <meta name="theme-color" content="#050707" />
        {['mainnet'].includes(process.env.NEXT_PUBLIC_NETWORK) && (
          <>
            <script
              defer
              src="https://static.cloudflareinsights.com/beacon.min.js"
              data-cf-beacon='{"token": "9d39c3893da043b496b4e2608df54643"}'
            />
            <script
              defer
              data-domain="planetopia.finance"
              src="https://plausible.io/js/plausible.js"
            />
            <script
            />
          </>
        )}
      </Head>
      <Provider store={store}>
        <Layout>
          <div id="portal" />
          <div id="modal-network" />
          <div id="modal-asset" />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}