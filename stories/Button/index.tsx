import { styled } from '../../styles/stitches.config'

const Button = styled('button', {
  backgroundColor: 'DarkViolet',
  color: 'White',
  borderRadius: 8,
  borderColor: 'White',
  variants: {
    size: {
      big: {
        fontSize: 64,
        padding: 20,
      },
      small: {
        fontSize: 12,
        padding: 8,
      },
    },
  },
})

export default Button
