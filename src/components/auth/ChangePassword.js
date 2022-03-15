import './ChangePassword.css'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Layout from '../Layout/Layout'

import { changePassword } from '../../api/auth'
import { changePasswordSuccess, changePasswordFailure } from '../AutoDismissAlert/messages'

const ChangePassword = ({ msgAlert, user }) => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const onChangePassword = async (event) => {
    event.preventDefault()

    try {
      await changePassword(oldPassword, newPassword, user)
      msgAlert({
        heading: 'Change Password Success',
        message: changePasswordSuccess,
        variant: 'success'
      })
      setShouldNavigate(true)
    } catch (error) {
      setOldPassword('')
      setNewPassword('')
      msgAlert({
        heading: 'Change Password Failed with error: ' + error.message,
        message: changePasswordFailure,
        variant: 'danger'
      })
    }
  }

  if (!user || shouldNavigate) {
    return <Navigate to='/' />
  }

  return (

    <Layout user={user}>
      <div className="form-container">
        <h1>ChangePassword</h1>
        <form className="change-password-form" onSubmit={onChangePassword}>
          <label className="change-password-label">Old Password</label>
          <input
            required
            name='oldPassword'
            value={oldPassword}
            type='password'
            placeholder='Old Password'
            onChange={event => setOldPassword(event.target.value)}
          />
          <label className="change-password-label">New Password</label>
          <input
            required
            name='newPassword'
            value={newPassword}
            type='password'
            placeholder='New Password'
            onChange={event => setNewPassword(event.target.value)}
          />
          <button className="change-password-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default ChangePassword
