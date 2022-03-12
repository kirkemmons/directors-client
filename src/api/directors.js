import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexDirectors = (user) => {
  return axios.get(apiUrl + '/directors/', {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const showDirector = (id, user) => {
  return axios.get(apiUrl + `/directors/${id}/`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const createDirector = (user, director) => {
  console.log('user ', user.token)
  return axios.post(apiUrl + '/directors/',
    { director },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    })
}

export const updateDirector = (user, id, director) => {
  return axios.patch(apiUrl + `/directors/${id}/`,
    { director },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    })
}

export const deleteDirector = (user, id) => {
  return axios.delete(apiUrl + `/directors/${id}/`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
