/* eslint-disable react/jsx-key */
import './DirectorDetail.css'
import { React, useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import { Navigate, Link, useParams } from 'react-router-dom'
import { showDirector, deleteDirector } from '../../api/directors'
import { deleteFilm } from '../../api/films'

function DirectorDetail ({ user, msgAlert }) {
  const [director, setDirector] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    const fetchDirector = async (user) => {
      try {
        const director = await showDirector(id, user)
        setDirector(director.data.director)
        setLoaded(true)
      } catch (error) {
        msgAlert({
          heading: 'Director failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }

    fetchDirector(user)
  }, [id])

  const handleDeleteDirector = async (event, user) => {
    try {
      await deleteDirector(user, id)
      setDeleted(true)

      msgAlert({
        heading: 'Director Deleted',
        message: 'Deleted director successfully.',
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed to delete director',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  const handleDeleteFilm = async (event, user, filmId) => {
    try {
      await deleteFilm(user, filmId)
      setDeleted(true)

      msgAlert({
        heading: 'Film Deleted',
        message: 'Deleted film successfully.',
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed to delete film',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (!isLoaded) {
    return (
      <p className="loading">Loading...</p>
    )
  } else if (deleted) {
    return <Navigate to='/directors' />
  } else {
    return (
      <Layout user={user}>
        <div>
          <div className="director-detail">
            <img
              src={director.image}
              alt={director.name}
              className="director-img"
            />
            <div className="detail">
              <p className="director-name">
                <b>{director.name}</b>
              </p>
              <p className="director-roles">
                <em>{director.roles}</em>
              </p>
              <p className="director-bio">{director.biography}</p>

              <div className="director-detail-btns">
                <Link to={`/directors/${director.id}/edit`}>
                  <button className="edit-button">Edit</button>
                </Link>
                <Link className="delete-button" to={'/directors'}>
                  <button
                    className="delete-button"
                    onClick={(event) => handleDeleteDirector(event, user)}>
                    Delete
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="film-section">
            <p className="film-section-title">Films:</p>
          </div>
          <div className="film-section-add">
            <p className="film-section-add-sentence">
                        Want to add a film?
              <Link to="/films/create" style={{ textDecoration: 'underline' }}>
                {' '}
                Click Here!
              </Link>
            </p>
          </div>

          <div className="film-card">
            {director && director.films.map((film) => (
              <div className="card" key={film.id}>
                <div className="image">
                  <img src={film.image} alt={film.title} />
                </div>
                <div className="details">
                  <div className="center">
                    <h2>
                      <b>
                        {film.title}, {film.release}
                      </b>
                    </h2>
                    <p>{film.description}</p>
                    <Link to={`/films/${film.id}/edit`}>
                      <button className="edit-button">Edit</button>
                    </Link>

                    <Link className="delete-button" to={'/directors'}>
                      <button
                        className="delete-button"
                        onClick={(event) => handleDeleteFilm(event, user, film.id) }>
                        Delete
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default DirectorDetail
