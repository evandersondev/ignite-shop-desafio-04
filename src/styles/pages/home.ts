import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
  paddingBottom: '2rem',
})

export const SliderContainer = styled('div', {
  display: 'flex',
  gap: '3rem',
  margin: '0 auto',

  '.embla_slide': {
    minWidth: '43.5rem',
  },
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  width: 696,
  minHeight: 656,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const Footer = styled('footer', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  padding: '1.25rem',

  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: 'rgba(0, 0, 0, 0.6)',

  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',
})

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '0.25rem',

  strong: {
    fontSize: '$lg',
    color: '$gray100',
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300',
  },
})

export const CartContainer = styled('button', {
  height: '3rem',
  width: '3rem',
  backgroundColor: '$green500',
  border: 0,
  borderRadius: 6,
  padding: '0.75rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    color: '$white',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})
