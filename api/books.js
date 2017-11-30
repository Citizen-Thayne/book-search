import axios from 'axios'

async function search (q) {
  const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
    params: {
      q
    }
  })
  return response.data
}

export default {
  search
}
