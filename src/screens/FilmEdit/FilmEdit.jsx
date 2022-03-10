import './FilmEdit.css'
import { React, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { showFilm, updateFilm } from '../../api/films'
import { indexDirectors } from '../../api/directors'
import Layout from '../../components/Layout/Layout'

function FilmEdit (props) {
  const navigate = useNavigate()
  const [directors, setDirectors] = useState([])
  const [filmedit, setFilmEdit] = useState({
    title: '',
    release: '',
    description: '',
    image: '',
    director: ''
  })

  const { id } = useParams()

  useEffect(() => {
    const fetchDirectors = async () => {
      const allDirectors = await indexDirectors()
      setDirectors(allDirectors)
    }
    fetchDirectors()
  }, [])

  useEffect(() => {
    const fetchFilm = async () => {
      const filmedit = await showFilm(id)
      setFilmEdit(filmedit)
    }
    fetchFilm()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFilmEdit({
      ...filmedit,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateFilm(id, filmedit)
    navigate('/directors/')
  }

  return (
    <Layout user={props.user}>
      <div className="film-edit">
        <h1 className="film-edit-title">Edit Film</h1>
      </div>
      <div className="film-edit-form">
        <form onSubmit={handleSubmit}>
          <div className="input-section">
            <label className="label">Title:</label>
            <input
              className="input"
              value={filmedit.title}
              name="title"
              required
              autoFocus
              onChange={handleChange}
            />
          </div>
          <div className="input-section">
            <label className="label">Release:</label>
            <input
              className="input"
              value={filmedit.release}
              name="release"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-section">
            <label className="label">Description:</label>
            <input
              className="input"
              rows={10}
              value={filmedit.description}
              name="description"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-section">
            <label className="label">Image:</label>
            <input
              className="input"
              value={filmedit.image}
              name="image"
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-section">
            <label className="label">
              <select
                value={directors.name}
                name="director"
                required
                onChange={handleChange}
                options={directors.name}
              >
                <option value="0" selected>
                    Director Name
                </option>
                {directors.map((name) => {
                  return (
                    <option
                      key={name.id}
                      value={name.id}
                      name="director"
                      required
                      onChange={handleChange}
                    >
                      {name.name}
                    </option>
                  )
                })}
              </select>
            </label>
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default FilmEdit
