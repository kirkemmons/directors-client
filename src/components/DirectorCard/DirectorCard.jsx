import './DirectorCard.css'
import { Link } from 'react-router-dom'
import React from 'react'

function DirectorCard (props) {
  return (
    <div>
      <Link to={'/directors'}>
        <img scr={props.image} alt={props.name} />
        <h2>{props.name}</h2>
      </Link>
    </div>
  )
}

export default DirectorCard
