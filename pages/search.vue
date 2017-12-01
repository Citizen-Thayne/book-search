<template>
  <v-layout>
    <v-flex text-xs-center>
      <form @submit.prevent="search">
        <v-text-field 
        name="search" 
        label="Search Books" 
        id="book-search" 
        v-model="query"></v-text-field>
      </form>
      <v-container align-center id="status">
        <v-alert color="error" v-if="error">{{error}}</v-alert>
        <v-progress-circular  v-if="isSearching" indeterminate color="primary"></v-progress-circular>
      </v-container>
      <v-container grid-list-lg v-if="!isSearching && books">
        <v-layout row wrap>
          <v-flex xs12 md6 v-for="book in books" :key="book.title">
            <book-card v-bind="book"></book-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import BookCard from '~/components/BookCard'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  components: {
    BookCard
  },
  methods: {
    ...mapActions('search', ['search'])
  },
  computed: {
    ...mapGetters('search', ['books']),
    ...mapState('search', ['isSearching', 'error']),
    query: {
      get () {
        return this.$store.state.search.query
      },
      set (newValue) {
        this.$store.commit('search/updateQuery', newValue)
      }
    }
  }
}
</script>