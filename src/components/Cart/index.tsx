import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { HandbagSimple, X } from 'phosphor-react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useCart } from '../../hooks/useCart'
import {
  Badge,
  CartButton,
  CartClose,
  CartContent,
  CartProduct,
  CartProductDetails,
  CartProductFooter,
  CartProductFooterDetails,
  CartProductImage,
} from './styles'
import { useState } from 'react'

export function Cart() {
  const { cartLength, cartItems, totalValueCartItems, removeProduct } =
    useCart()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const cartTotalFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalValueCartItems)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        products: cartItems,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton onClick={() => {}}>
          <HandbagSimple size={24} weight="bold" />

          {cartLength > 0 && <Badge>{cartLength}</Badge>}
        </CartButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <h2>Sacola de compras</h2>

          <section>
            {cartLength <= 0 && <p>Parece que seu carrinho está vazio :(</p>}

            {cartItems.map((product) => {
              return (
                <CartProduct key={product.id}>
                  <CartProductImage>
                    <Image
                      width={100}
                      height={93}
                      alt=""
                      src={product.imageUrl}
                    />
                  </CartProductImage>

                  <CartProductDetails>
                    <p>{product.name}</p>
                    <strong>{product.price}</strong>
                    <button onClick={() => removeProduct(product.id)}>
                      Remover
                    </button>
                  </CartProductDetails>
                </CartProduct>
              )
            })}
          </section>

          <CartProductFooter>
            <CartProductFooterDetails>
              <div>
                <span>Quantidade</span>
                <p>
                  {cartLength} {cartLength > 1 ? 'itens' : 'item'}
                </p>
              </div>
              <div>
                <span>Valor total</span>
                <p>{cartTotalFormatted}</p>
              </div>
            </CartProductFooterDetails>
            <button
              disabled={isCreatingCheckoutSession || cartLength <= 0}
              onClick={handleBuyProduct}
            >
              Finalizar compra
            </button>
          </CartProductFooter>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
