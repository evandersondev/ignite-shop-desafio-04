import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { Container } from '../styles/pages/app'

import { CartContextProvider } from '../contexts/CartContext'
import { Header } from '../components/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header />

        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
