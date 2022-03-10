/* eslint-disable react/jsx-key */
import { React, useState, useEffect } from 'react'
import './DirectorDetail.css'
import Layout from '../../components/Layout/Layout'
import { Link, useParams } from 'react-router-dom'
import { showDirector, deleteDirector } from '../../api/directors'
import { deleteFilm } from '../../api/films'

function DirectorDetail (props) {
  const [director, setDirector] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchDirector = async () => {
      const director = await showDirector(id)
      setDirector(director)
      setLoaded(true)
    }

    fetchDirector()
  }, [id])

  if (!isLoaded) {
    return <p className="loading">Loading...</p>
  }

  return (
    <Layout user={props.user}>
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
                  onClick={() => deleteDirector(director.id)}>
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
          {director.films.map((films) => (
            <div className="card">
              <div className="image">
                <img src={films.image} alt={films.title} />
              </div>
              <div className="details">
                <div className="center">
                  <h2>
                    <b>
                      {films.title}, {films.release}
                    </b>
                  </h2>
                  <p>{films.description}</p>
                  <Link to={`/films/${films.id}/edit`}>
                    <button className="edit-button">Edit</button>
                  </Link>

                  <Link className="delete-button" to={'/directors'}>
                    <button
                      className="delete-button"
                      onClick={() => deleteFilm(films.id)}>
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

export default DirectorDetail
