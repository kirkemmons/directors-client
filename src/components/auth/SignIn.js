import './SignIn.css'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

import { signIn } from '../../api/auth'
import { signInSuccess, signInFailure } from '../AutoDismissAlert/messages'

// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

const SignIn = ({ msgAlert, setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const onSignIn = async (event) => {
    event.preventDefault()

    try {
      const res = await signIn(email, password)
      setUser(res.data.user)

      msgAlert({
        heading: 'Sign In Success',
        message: signInSuccess,
        variant: 'success'
      })
      setShouldNavigate(true)
    } catch (error) {
      setEmail('')
      setPassword('')
      msgAlert({
        heading: 'Sign In Failed with error: ' + error.message,
        message: signInFailure,
        variant: 'danger'
      })
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/' />
  }

  return (

    <Layout>
      <div className="form-container">
        <h1>Login to your Account</h1>
        <form className="sign-in-form" onSubmit={onSignIn}>
          <label className="sign-in-label">Email Address</label>
          <input
            required
            type="email"
            name="email"
            value={email}
            placeholder="Enter Email"
            onChange={event => setEmail(event.target.value)}
          />
          <label className="sign-in-label">Password</label>
          <input
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
          />
          <button className="sign-in-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default SignIn
