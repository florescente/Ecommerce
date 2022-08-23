import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { styled } from '../../styles/stitches.config'
import Avatar from '../Avatar'
import Button from '../Button'
import { Menu, MenuItem, Menutrigger, MenuSeparator, MenuInside } from '../Menu'

export const Nav: any = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  backgroundColor: 'Azure',
  paddingTop: 8,
  paddingBottom: 8,
  justifyContent: 'space-between',
})

export const NavItem: any = styled('li', {
  display: 'flex',
})

function Navbar() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div>Loading...</div>
  }
  if (status === 'authenticated' && session) {
    return (
      <Nav>
        <NavItem>
          <Link href="/second">Second Page</Link>
        </NavItem>
        <NavItem>
          <Menu>
            <Menutrigger>
              <Avatar src={session.user!.image!} alt="profile" />
            </Menutrigger>
            <MenuInside>
              <MenuItem>{session.user!.name}</MenuItem>
              <MenuItem>{session.user!.email}</MenuItem>
              <MenuSeparator />
              <MenuItem>{session.expires}</MenuItem>
              <MenuItem>
                <Button type="button" size="small" onClick={() => signOut()}>
                  Sign Out
                </Button>
              </MenuItem>
            </MenuInside>
          </Menu>
        </NavItem>
      </Nav>
    )
  }
  return (
    <Nav>
      <NavItem>
        <Link href="/second">Second Page</Link>
      </NavItem>
      <NavItem>
        <Button type="button" size="small" onClick={() => signIn()}>
          Sign In
        </Button>
      </NavItem>
    </Nav>
  )
}

export default Navbar
