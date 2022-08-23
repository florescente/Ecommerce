import * as MenuPrimitive from '@radix-ui/react-dropdown-menu'
import { styled } from '../../styles/stitches.config'

const Menu = styled(MenuPrimitive.Root, {})
const MenuItem = styled(MenuPrimitive.Item, {})
const Menutrigger = styled(MenuPrimitive.Trigger, {})
const MenuPortal = styled(MenuPrimitive.Portal, {})
const MenuContent = styled(MenuPrimitive.Content, {})
const MenuSeparator = styled(MenuPrimitive.Separator, {})
const MenuArrow = styled(MenuPrimitive.Arrow, {})

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
