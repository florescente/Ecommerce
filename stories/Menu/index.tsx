import * as MenuPrimitive from '@radix-ui/react-dropdown-menu'
import { styled } from '../../styles/stitches.config'

const Menu = styled(MenuPrimitive.Root, {})
const MenuItem = styled(MenuPrimitive.Item, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: 'BlueViolet',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 35,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',
  '&[data-disabled]': {
    color: '$gray500',
    pointerEvents: 'none',
  },
  '&[data-highlighted]': {
    backgroundColor: 'DarkViolet',
    color: 'white',
  },
})
const Menutrigger = styled(MenuPrimitive.Trigger, {
  borderRadius: '100%',
  borderWidth: 0.2,
})
const MenuPortal = styled(MenuPrimitive.Portal, {})
const MenuContent = styled(MenuPrimitive.Content, {
  minWidth: 220,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
})
const MenuSeparator = styled(MenuPrimitive.Separator, {
  height: 1,
  backgroundColor: 'Violet',
  margin: 5,
})
const MenuArrow = styled(MenuPrimitive.Arrow, {
  fill: 'white',
})

function MenuInside({ children, ...props }: any) {
  return (
    <MenuPortal>
      <MenuContent {...props}>
        {children}
        <MenuArrow />
      </MenuContent>
    </MenuPortal>
  )
}

export { Menu, MenuItem, Menutrigger, MenuSeparator, MenuInside }
