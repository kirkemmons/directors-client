/* eslint-disable no-tabs */
import './App.css'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import Directors from './screens/Directors/Directors'
import DirectorDetail from './screens/DirectorDetail/DirectorDetail'
import DirectorEdit from './screens/DirectorEdit/DirectorEdit'
import DirectorCreate from './screens/DirectorCreate/DirectorCreate'
import FilmCreate from './screens/FilmCreate/FilmCreate'
import FilmEdit from './screens/FilmEdit/FilmEdit'
// import Home from './screens/Home/Home'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }

  return (
    <>
      <Header user={user} />
      {msgAlerts.map(msgAlert => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
        />
      ))}
      <main className='body'>
        <Routes>

          {/* <Route path='/'
            element={<Home />} /> */}

          <Route
            path='/sign-up'
            element={<SignUp msgAlert={msgAlert} setUser={setUser} /> }
          />
          <Route
            path='/sign-in'
            element={<SignIn msgAlert={msgAlert} setUser={setUser} /> }
          />
          <Route
            path='/sign-out'
            element={<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} /> }
          />
          <Route
            path='/change-password'
            element={<ChangePassword msgAlert={msgAlert} user={user} /> }
          />
          <Route
            path='/directors'
            element={<Directors msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/directors/:id'
            element={<DirectorDetail msgAlert={msgAlert} user={user}/>}
          />
          <Route
            path='/directors/:id/edit'
            element={<DirectorEdit msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/directors/create'
            element={<DirectorCreate msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/films/create'
            element={<FilmCreate msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/films/:id/edit'
            element={<FilmEdit msgAlert={msgAlert} user={user} />}
          />

        </Routes>
      </main>
    </>
  )
}

export default App
