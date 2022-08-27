import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { styled } from '../../styles/stitches.config'
import Avatar from '../Avatar'
import Button from '../Button'
import Input from '../Input'
import { Menu, MenuItem, Menutrigger, MenuSeparator, MenuInside } from '../Menu'

export const Header: any = styled('header', {
  display: 'flex',
  backgroundColor: 'Azure',
})

export const Navigation: any = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 980,
  padding: 8,
  margin: 'auto',
})

export const Nav: any = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  listStyle: 'none',
})

export const NavItem: any = styled('li', {
  display: 'flex',
  marginRight: 16,
})

function Navbar() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <Header>
        <Navigation>Loading...</Navigation>
      </Header>
    )
  }
  if (status === 'authenticated' && session) {
    return (
      <Header>
        <Navigation>
          <img src="/vercel.svg" alt="logo" width={100} />
          <Nav>
            <NavItem>
              <Link href="/second">Second Page</Link>
            </NavItem>
            <NavItem>
              <Link href="/second">Second Page</Link>
            </NavItem>
            <NavItem>
              <Link href="/second">Second Page</Link>
            </NavItem>
          </Nav>
          <div>
            <Input placeholder="Search" />
            <Button type="button" size="small">
              OK
            </Button>
          </div>
          <div>Kart</div>
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
        </Navigation>
      </Header>
    )
  }
  return (
    <Header>
      <Navigation>
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
      </Navigation>
    </Header>
  )
}

export default Navbar
