import _ from 'lodash'

import * as bookCollections from '~/api/bookCollections'
import * as types from './mutation-types'
import * as Books from '~/api/books'

export default {
  state: () => ({
    collections: {
      // id: {
      //  books: bookId[]
      // }
    },
    books: {},
    isLoading: false,
    loadComplete: false
  }),
  getters: {
  },
  mutations: {
    [types.SET_COLLECTIONS]: (state, collections) => (state.collections = collections),
    [types.SET_IS_LOADING]: (state, isLoading) => (state.isLoading = isLoading),
    [types.SET_LOAD_COMPLETE]: (state, loadComplete) => (state.loadComplete = loadComplete),
    [types.SET_BOOKS]: (state, books) => (state.books = _.keyBy(books, 'id'))
  },
  actions: {
    async getMyCollections ({commit}) {
      commit(types.SET_IS_LOADING, true)
      const myCollections = await bookCollections.mine()
      commit(types.SET_COLLECTIONS, myCollections)
      const bookIds = Object.values(myCollections).reduce((a, b) => a.concat(b))
      const myBooks = await Books.getMany(bookIds)
      commit(types.SET_BOOKS, myBooks)
      commit(types.SET_LOAD_COMPLETE, true)
      commit(types.SET_IS_LOADING, false)
    }
  }
}
