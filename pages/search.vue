<template>
  <v-layout>
    <v-flex text-xs-center>
      <form @submit.prevent="submit">
        <v-text-field name="search" label="Search Books" id="book-search" v-model="query" autocomplete="off"></v-text-field>
      </form>
      <v-container align-center id="status">
        <v-alert color="error" v-if="error">{{error}}</v-alert>
        <v-progress-circular v-if="isSearching" indeterminate color="primary"></v-progress-circular>
      </v-container>
      <book-list v-if="!isSearching && books.length" :books="books" title="results" />      
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'

import BookList from '~/components/BookList'

export default {
  components: { BookList },
  asyncData ({ store, route }) {
    let q = route.query.q
    if (q) {
      store.commit('search/updateQuery', q)
      store.dispatch('search/search')
    }
  },
  methods: {
    ...mapActions('search', ['search']),
    ...mapMutations('search', ['updateQuery']),
    submit () {
      this.$router.push({ path: this.$router.path, query: { q: this.query } })
      this.search()
    }
  },
  computed: {
    ...mapGetters('search', ['books']),
    ...mapState('search', ['isSearching', 'error', 'query']),
    query: {
      get () {
        return this.$store.state.search.query
      },
      set (newValue) {
        this.updateQuery(newValue)
      }
    }
  }
}
</script>
