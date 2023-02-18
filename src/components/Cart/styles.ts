import { styled } from '@stitches/react'
import * as Dialog from '@radix-ui/react-dialog'

export const CartButton = styled('button', {
  height: '3rem',
  width: '3rem',
  backgroundColor: '$gray800',
  borderRadius: 6,
  padding: '0.75rem',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 0,

  svg: {
    color: '$gray500',

    '&:hover': {
      color: '$gray300',
    },
  },
})

export const Badge = styled('div', {
  position: 'absolute',
  top: 'calc(-1.5rem / 2)',
  right: 'calc(-1.5rem / 2)',
  height: '1.5rem',
  width: '1.5rem',
  backgroundColor: '$green500',
  color: '$gray300',
  outline: '$gray900 solid 3px',
  fontSize: '$sm',
  fontWeight: 'bold',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const CartContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '30rem',
  backgroundColor: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontWeight: 700,
    fontSize: '$lg',
    color: '$gray100',
    marginBottom: '2rem',
  },

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    flex: 1,
    overflow: 'auto',
  },
})

export const CartClose = styled(Dialog.Close, {
  background: 'none',
  border: 0,
  color: '$gray500',
  position: 'absolute',
  top: '1.75rem',
  right: '1.5rem',
})

export const CartProduct = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'center',
  height: '5.8215rem',
})

export const CartProductImage = styled('div', {
  width: '6.3125rem',
  height: '5.8125rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  },
})

export const CartProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',

  p: {
    color: '$gray300',
    fontSize: '$md',
  },

  strong: {
    marginTop: 4,
    fontSize: '$md',
    fontWeight: 700,
  },

  button: {
    marginTop: 'auto',
    width: 'max-content',
    background: 'none',
    border: 0,
    color: '$green500',
    fontSize: '1rem',
    fontWeight: 700,
  },
})

export const CartProductFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',

  button: {
    width: '100%',
    height: '4.3125rem',
    background: '$green500',
    color: '$white',
    fontSize: '$md',
    border: 0,
    borderRadius: 8,
    fontWeight: 700,

    '&:hover': {
      background: '$green300',
    },
  },
})

export const CartProductFooterDetails = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  marginBottom: 55,

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    p: {
      fontSize: '$md',
      color: '$gray300',
    },

    '&:last-child': {
      fontWeight: 'bold',

      span: {
        fontSize: '$md',
      },

      p: {
        color: '$gray100',
        fontSize: '$xl',
      },
    },
  },
})
