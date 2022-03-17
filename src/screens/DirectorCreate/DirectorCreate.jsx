import './DirectorCreate.css'
import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createDirector } from '../../api/directors'
import Layout from '../../components/Layout/Layout'

function DirectorCreate ({ user, msgAlert }) {
  const navigate = useNavigate()

  const [directorcreate, setDirectorCreate] = useState({
    name: '',
    roles: '',
    biography: '',
    image: '',
    films: []
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setDirectorCreate({
      ...directorcreate,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await createDirector(user, directorcreate)

      msgAlert({
        heading: 'Director Created',
        message: `Created ${name} successfully.`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed to create director',
        message: error.message,
        variant: 'danger'
      })
    }

    navigate('/directors/')
  }

  const { name, roles, biography, image } = directorcreate

  return (
    <Layout user={user}>
      <div className="director-edit">
        <h1 className="director-edit-title">Add Director</h1>
      </div>
      <div className="edit-form">
        <form onSubmit={handleSubmit}>
          <div className="input-section">
            <label className="label">Name:</label>
            <input
              className="input"
              value={name}
              name="name"
              required
              autoFocus
              onChange={handleChange}
            />
          </div>
          <div className="input-section">
            <label className="label">Roles:</label>
            <input
              className="input"
              value={roles}
              name="roles"
              require
              onChange={handleChange}
            />
          </div>

          <div className="input-section">
            <label className="label">Biography:</label>
            <input
              className="input"
              rows={10}
              value={biography}
              name="biography"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-section">
            <label className="label">Image:</label>
            <input
              className="input"
              value={image}
              name="image"
              required
              onChange={handleChange}
            />
          </div>
          <button className="submit" type="submit">
              Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default DirectorCreate
