import Stripe from 'stripe'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import {
  CartContainer,
  Footer,
  HomeContainer,
  InfoContainer,
  Product,
  SliderContainer,
} from '../styles/pages/home'
import { stripe } from '../lib/stripe'

import { Handbag } from 'phosphor-react'
import { useCart } from '../hooks/useCart'
import useEmblaCarousel from 'embla-carousel-react'
import { IProduct } from '../contexts/CartContext'
import { Skeleton } from '../components/Skeleton'
import { useEffect, useState } from 'react'

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  })
  const { addNewProduct, checkIfProductAlreadyExists } = useCart()

  function handleAddNewProduct(product: IProduct) {
    addNewProduct(product)
  }

  useEffect(() => {
    const timeOut = setTimeout(() => setIsLoading(false), 2000)

    return () => clearTimeout(timeOut)
  }, [])

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <div style={{ overflow: 'hidden', width: '100%' }}>
        <HomeContainer>
          <div className="embla" ref={emblaRef}>
            <SliderContainer className="embla__container container">
              {products.map((product) => {
                return isLoading ? (
                  <Skeleton className="embla__slide" />
                ) : (
                  <Product key={product.id} className="embla__slide">
                    <Link href={`/product/${product.id}`} prefetch={false}>
                      <Image
                        src={product.imageUrl}
                        width={520}
                        height={480}
                        alt=""
                      />
                    </Link>
                    <Footer>
                      <InfoContainer>
                        <strong>{product.name}</strong>
                        <span>{product.price}</span>
                      </InfoContainer>

                      <CartContainer
                        disabled={checkIfProductAlreadyExists(product.id)}
                        onClick={() => handleAddNewProduct(product)}
                      >
                        <Handbag size={32} weight="bold" />
                      </CartContainer>
                    </Footer>
                  </Product>
                )
              })}
            </SliderContainer>
          </div>
        </HomeContainer>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      numberPrice: price.unit_amount / 100,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
