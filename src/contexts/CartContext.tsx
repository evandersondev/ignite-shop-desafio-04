import { createContext, ReactNode, useState } from 'react'

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
  numberPrice: number
  description: string
  defaultPriceId: string
}

interface CartContextType {
  cartItems: IProduct[]
  cartLength: number
  totalValueCartItems: number
  addNewProduct: (product: IProduct) => void
  removeProduct: (productId: string) => void
  checkIfProductAlreadyExists: (productId: string) => boolean
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([])

  function addNewProduct(product: IProduct) {
    setCartItems((state) => [product, ...state])
  }

  function removeProduct(productId: string) {
    setCartItems((state) => state.filter((product) => product.id !== productId))
  }

  function checkIfProductAlreadyExists(productId: string) {
    return cartItems.some((product) => product.id === productId)
  }

  const totalValueCartItems = cartItems.reduce((total, product) => {
    return total + product.numberPrice
  }, 0)

  const cartLength = cartItems.length

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartLength,
        totalValueCartItems,
        addNewProduct,
        removeProduct,
        checkIfProductAlreadyExists,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
