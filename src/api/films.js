import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexFilm = (user) => {
  return axios.get(apiUrl + '/films/', {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const showFilm = (user, id) => {
  return axios.get(apiUrl + `/films/${id}/`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const createFilm = (user, film) => {
  console.log('user ', user.token)
  return axios.post(apiUrl + '/films/',
    { film },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    })
}

export const updateFilm = (user, id, film) => {
  return axios.patch(apiUrl + `/films/${id}/`,
    { film },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    })
}

export const deleteFilm = (user, id) => {
  return axios.delete(apiUrl + `/films/${id}/`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
