import './SignUp.css'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Layout from '../Layout/Layout'

import { signUp, signIn } from '../../api/auth'
import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'

const SignUp = ({ msgAlert, setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const onSignUp = async (event) => {
    event.preventDefault()

    try {
      await signUp(email, password, passwordConfirmation)
      const res = await signIn(email, password)
      setUser(res.data.user)
      msgAlert({
        heading: 'Sign Up Success',
        message: signUpSuccess,
        variant: 'success'
      })
      setShouldNavigate(true)
    } catch (error) {
      setEmail('')
      setPassword('')
      setPasswordConfirmation('')
      msgAlert({
        heading: 'Sign Up Failed with error: ' + error.message,
        message: signUpFailure,
        variant: 'danger'
      })
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/' />
  }

  return (

    <Layout>
      <div className='form-container'>
        <h1>Need an Account? Sign Up</h1>
        <form className='sign-up-form' onSubmit={onSignUp}>
          <label className='sign-up-label'>Email Address</label>
          <input
            required
            type='email'
            name='email'
            value={email}
            placeholder='Enter email'
            onChange={event => setEmail(event.target.value)}
          />
          <label className='sign-up-label'>Password</label>
          <input
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
          />
          <label className='sign-up-label'>Password Confirmation</label>
          <input
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            type='password'
            placeholder='Confirm Password'
            onChange={event => setPasswordConfirmation(event.target.value)}
          />
          <button className='sign-up-btn' type='submit'>
            Sign Up
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default SignUp
