import './Header.css'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <>
    <NavLink to='/directors' className='link'>Directors</NavLink>
    <NavLink to='/directors/create' className='link'>Add a Director</NavLink>
    <NavLink to='/change-password' className='link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='link'>Sign Out</NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink to='/sign-up' className='link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='link'>Sign In</NavLink>
  </>
)

const alwaysOptions = (
  <>
    {/* <NavLink to='/' className='link'></NavLink> */}
  </>
)

const Header = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="nav">
      <div className="nav-body">
        <NavLink className="logo" to="/">
          directorsUncut
        </NavLink>
        <div className="links">
          {user && (
            <div className="link-welcome">Welcome, {user.email}!</div>
          )}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>

        <div className="curtain">
          <div className="curtainBtn">
            <button className="menuBtn" onClick={toggleMenu}>
              Menu
            </button>
          </div>

          <div className={`overlay ${menuOpen ? ' showMenu' : ''}`}>
            <button className="overlayBtn" onClick={toggleMenu}>
              X
            </button>
            <div className="overlay-content">
              {alwaysOptions}
              {user ? authenticatedOptions : unauthenticatedOptions}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
