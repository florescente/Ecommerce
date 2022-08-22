import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { styled } from '../../styles/stitches.config'
import Avatar from '../Avatar'
import Button from '../Button'

export const Nav = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  backgroundColor: 'Azure',
  paddingTop: 8,
  paddingBottom: 8,
})

export const NavItem = styled('li', {
  marginLeft: 20,
})

function Navbar() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div>Loading...</div>
  }
  if (status === 'authenticated' && session) {
    return (
      <Nav>
        <NavItem>{session.user!.name}</NavItem>
        <NavItem>{session.user!.email}</NavItem>
        <NavItem>
          <Avatar src={session.user!.image!} alt="profile" />
        </NavItem>
        <NavItem>{session.expires}</NavItem>
        <NavItem>
          <Link href="/second">Second Page</Link>
        </NavItem>
        <NavItem>
          <Button type="button" size="small" onClick={() => signOut()}>
            Sign Out
          </Button>
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
