import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { styled } from '../../styles/stitches.config'

export const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  userSelect: 'none',
  cursor: 'pointer',
  width: 45,
  height: 45,
  borderRadius: '100%',
})

export const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: '$gray500',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
})

function Avatar({ src, alt }: { src: string; alt: string | undefined }) {
  return (
    <StyledAvatar>
      <StyledImage src={src} alt={alt} referrerPolicy="no-referrer" />
      <StyledFallback delayMs={600}>{alt}</StyledFallback>
    </StyledAvatar>
  )
}

export default Avatar
