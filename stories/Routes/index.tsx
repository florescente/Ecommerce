import React from 'react'
import { styled } from '@stitches/react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import Link from 'next/link'

const StyledMenu = styled(NavigationMenuPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  zIndex: 1,
})

const StyledMenuList = styled(NavigationMenuPrimitive.List, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'white',
  padding: 4,
  borderRadius: 6,
  listStyle: 'none',
  boxShadow: `0 2px 10px violet`,
})

const StyledViewport = styled(NavigationMenuPrimitive.Viewport, {
  position: 'relative',
  transformOrigin: 'top center',
  marginTop: 10,
  width: '100%',
  backgroundColor: 'white',
  borderRadius: 6,
  overflow: 'hidden',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  height: 'var(--radix-navigation-menu-viewport-height)',

  '@media only screen and (min-width: 600px)': {
    width: 'var(--radix-navigation-menu-viewport-width)',
  },
})

const itemStyles = {
  padding: '8px 12px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 15,
  color: 'violet',
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px violet` },
  '&:hover': { backgroundColor: 'purple' },
}

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger, {
  all: 'unset',
  ...itemStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
})

const StyledContent = styled(NavigationMenuPrimitive.Content, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  '@media only screen and (min-width: 600px)': { width: 'auto' },
})

const NavigationMenuItem = NavigationMenuPrimitive.Item

export const NavigationMenuDemo = () => {
  return (
    <StyledMenu>
      <StyledMenuList>
        <NavigationMenuItem>
          <StyledTrigger>Item One</StyledTrigger>
          <StyledContent>Item One content</StyledContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <StyledTrigger>Item two</StyledTrigger>
          <StyledContent>Item Two content</StyledContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <StyledTrigger>Item Three</StyledTrigger>
          <StyledContent>Item Three content</StyledContent>
        </NavigationMenuItem>
      </StyledMenuList>
      <StyledViewport />
    </StyledMenu>
  )
}

export default NavigationMenuDemo
