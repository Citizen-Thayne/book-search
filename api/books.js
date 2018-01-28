import axios from 'axios'

const BASE_URL = 'https://www.googleapis.com/books/v1'

export async function search (q) {
  const response = await axios.get(`${BASE_URL}/volumes`, {
    params: {
      q
    }
  })
  return response.data
}

export async function get (id) {
  try {
    const response = await axios.get(`${BASE_URL}/volumes/${id}`)
    return response.data
  } catch (e) {
    console.log({e})
  }
}

export async function getMany (ids) {
  const books = await Promise.all(ids.map(get))
  return books
}
