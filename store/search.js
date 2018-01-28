import * as books from '~/api/books'
import _ from 'lodash'

export const state = () => ({
  query: '',
  isSearching: false,
  searchComplete: false,
  results: {
    items: []
  },
  error: null
})

export const getters = {
  books ({
    results
  }) {
    if (!results.items) {
      return []
    }
    return results.items.map((item) => ({
      title: _.get(item, 'volumeInfo.title', '(No Title)'),
      authors: _.get(item, 'volumeInfo.authors', ['(No Authors)']).join(', '),
      thumbnailUrl: _.get(item, 'volumeInfo.imageLinks.thumbnail'),
      id: item.id,
      etag: item.etag
    }))
  },
  volumeIds: ({results}) => {
    if (!results.items) {
      return []
    }
    return results.items.map((item) => item.id)
  }
}
export const mutations = {
  updateQuery (state, query) {
    state.query = query
  },
  setSearching (state, isSearching) {
    state.isSearching = isSearching
  },
  completeSearch (state) {
    state.searchComplete = true
  },
  setResults (state, results) {
    state.results = results
  },
  setError (state, error) {
    state.error = error
  }
}

export const actions = {
  async search ({
    state,
    commit
  }) {
    commit('setSearching', true)
    commit('setResults', [])
    let results
    try {
      results = await books.search(state.query)
      commit('setResults', results)
    } catch (e) {
      commit('setError', 'Unkown error occured')
    } finally {
      commit('setSearching', false)
      commit('completeSearch')
    }
  }
}
