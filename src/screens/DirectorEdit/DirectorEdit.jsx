import './DirectorEdit.css'
import { React, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { showDirector, updateDirector } from '../../api/directors'
import Layout from '../../components/Layout/Layout'

function DirectorEdit ({ user, msgAlert }) {
  const navigate = useNavigate()

  const [directoredit, setDirectorEdit] = useState({
    name: '',
    roles: '',
    biography: '',
    image: ''
  })

  const { id } = useParams()

  useEffect(() => {
    const fetchDirector = async (user) => {
      const directoredit = await showDirector(user, id)
      setDirectorEdit(directoredit.data.director)
    }
    fetchDirector(user)
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setDirectorEdit({
      ...directoredit,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await updateDirector(user, id, directoredit)

      msgAlert({
        heading: 'Director Updated',
        message: 'Updated director successfully',
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed to update director',
        message: error.message,
        variant: 'danger'
      })
    }

    navigate(`/directors/${id}/`)
  }

  return (
    <Layout user={user}>
      <div className="director-edit">
        <h1 className="director-edit-title">Edit Director</h1>
      </div>
      <div className="edit-form">
        <form onSubmit={handleSubmit}>
          <div className="input-section">
            <label className="label">Name:</label>
            <input
              className="input"
              value={directoredit.name}
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
              value={directoredit.roles}
              name="roles"
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-section">
            <label className="label">Biography:</label>
            <input
              className="input"
              rows={10}
              value={directoredit.biography}
              name="biography"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-section">
            <label className="label">Image:</label>
            <input
              className="input"
              value={directoredit.image}
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

export default DirectorEdit
