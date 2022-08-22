import React from 'react'
import Navbar from '../Navbar'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  )
}

export default Layout
