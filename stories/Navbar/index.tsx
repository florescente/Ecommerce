import { signIn, signOut } from 'next-auth/react'

function Navbar() {
  return (
    <ul>
      <li>
        <button type="button" onClick={() => signIn()}>
          Sign In
        </button>
      </li>
      <li>
        <button type="button" onClick={() => signOut()}>
          Sign Out
        </button>
      </li>
    </ul>
  )
}

export default Navbar
