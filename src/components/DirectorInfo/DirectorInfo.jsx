import './DirectorInfo.css'
import { React, useState, useEffect } from 'react'
import { indexDirectors } from '../../api/directors'
import { Link } from 'react-router-dom'

const DirectorInfo = () => {
  const [directors, setDirectors] = useState([])
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    const fetchDirectors = async () => {
      const allDirectors = await indexDirectors()
      setDirectors(allDirectors)
      setLoaded(true)
    }
    fetchDirectors()
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
        {directors.map((director) => (
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
