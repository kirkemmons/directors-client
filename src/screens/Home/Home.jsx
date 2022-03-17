import './Home.css'
import Layout from '../../components/Layout/Layout'
import React from 'react'

function Home () {
  return (
    <Layout>
      <div>
        <p className="title">directorsUncut</p>
        <p className="home-sentence">
          A collection of your favorite movies and directors
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Steven_Spielberg_by_Gage_Skidmore.jpg/440px-Steven_Spielberg_by_Gage_Skidmore.jpg"
          alt="steven-spielberg-home"
          width="240"
          height="380"
          className="steven-spielberg-home"
        />
        <img
          src="https://www.goldderby.com/wp-content/uploads/2019/03/Quentin-Tarantino.jpg"
          alt="quentin-tarantino-home"
          width="480"
          height="280"
          className="quentin-tarantino-home"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Christopher_Nolan_Cannes_2018.jpg/440px-Christopher_Nolan_Cannes_2018.jpg"
          alt="christopher-nolan-home"
          width="230"
          height="380"
          className="christopher-nolan-home"
        />
      </div>
    </Layout>
  )
}

export default Home
