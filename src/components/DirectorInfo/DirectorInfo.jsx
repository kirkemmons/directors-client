import './DirectorInfo.css'
import { React, useState, useEffect } from 'react'
import { indexDirectors } from '../../api/directors'
import { Navigate, Link } from 'react-router-dom'

const DirectorInfo = ({ user, msgAlert }) => {
  const [directors, setDirectors] = useState([])
  const [isLoaded, setLoaded] = useState(false)

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    const fetchDirectors = async (user) => {
      try {
        const allDirectors = await indexDirectors(user)
        setDirectors(allDirectors.data.directors)
        setLoaded(true)
      } catch (error) {
        msgAlert({
          heading: 'Directors List failed to load, try creating one first',
          message: error.message,
          variant: 'danger'
        })
      }
    }

    fetchDirectors(user)
  }, [])

  if (!isLoaded) {
    return <p className="loading">Loading...</p>
  }

  return (
    <div>
      <div>
        <p className="all-director-title">Director List</p>
        <p className="all-director-sentence">
          {' '}
              Want to add a Director?
          <Link to="/directors/create" style={{ textDecoration: 'underline' }}>
            {' '}
              Click Here!
          </Link>
        </p>
        {directors && directors.map((director) => (
          <Link to={`/directors/${director.id}`} key={director.id} >
            <div className="director-container">
              <img
                src={director.image}
                alt={director.name}
                className="director-card-img"
              />
              <h2 className="director-card">{director.name}</h2>
              <p>
                <em>Read More</em>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DirectorInfo
