import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

function Navbar() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div>Loading...</div>
  }
  if (status === 'authenticated' && session) {
    return (
      <ul>
        <li>{session.user!.name}</li>
        <li>{session.user!.email}</li>
        <li>
          <img src={session.user!.image!} alt="profile" />
        </li>
        <li>{session.expires}</li>
        <li>
          <Link href="/second">Second Page</Link>
        </li>
        <li>
          <button type="button" onClick={() => signOut()}>
            Sign Out
          </button>
        </li>
      </ul>
    )
  }
  return (
    <ul>
      <li>
        <Link href="/second">Second Page</Link>
      </li>
      <li>
        <button type="button" onClick={() => signIn()}>
          Sign In
        </button>
      </li>
    </ul>
  )
}

export default Navbar
