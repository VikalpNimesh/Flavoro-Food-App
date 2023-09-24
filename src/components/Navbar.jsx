import React from 'react'

export default function Navbar() {
  return (
    <nav>
    <div className="nav-left">
        <h1>{new Date().toUTCString()}</h1>
        <h1>Foody.com</h1>
    </div>
    <div className="nav-right"></div>
    </nav>
  )
}
