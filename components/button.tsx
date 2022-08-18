import { styled } from '../styles/stitches.config'

const Button = styled('button', {
  backgroundColor: 'Pink',
  borderRadius: '8px',
  borderColor: '$gray500',
  variants: {
    size: {
      big: {
        fontSize: 64,
        padding: 20,
      },
      small: {
        fontSize: 18,
        padding: 10,
      },
    },
  },
})

export default Button
