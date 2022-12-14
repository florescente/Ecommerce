import { signIn, signOut, useSession } from 'next-auth/react'
import { styled } from '../../styles/stitches.config'
import Avatar from '../Avatar'
import Button from '../Button'
import Input from '../Input'
import { Menu, MenuItem, Menutrigger, MenuSeparator, MenuInside } from '../Menu'
import NavigationMenuDemo from '../Routes'

export const Header: any = styled('header', {
  display: 'flex',
  flexDirection: 'column',
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
        <NavigationMenuDemo />
      </Header>
    )
  }
  return (
    <Header>
      <Navigation>
        <Button type="button" size="small" onClick={() => signIn()}>
          Sign In
        </Button>
      </Navigation>
    </Header>
  )
}

export default Navbar
