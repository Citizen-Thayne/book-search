import * as books from '~/api/books'

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
  books: ({results}) => results.items,
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
