import { signIn } from 'next-auth/react'
import React from 'react'

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <button type="button" onClick={() => signIn('google')}>
        Google
      </button>
      <button type="button" onClick={() => signIn('facebook')}>
        Facebook
      </button>
      <button type="button" onClick={() => signIn('github')}>
        Github
      </button>
    </div>
  )
}

export default Login
