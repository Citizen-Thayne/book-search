<template>
  <v-layout>
    <v-flex text-xs-center>
      <form @submit.prevent="search">
        <v-text-field 
        name="search" 
        label="Search Books" 
        id="book-search" 
        v-model="query"
        autocomplete="off"></v-text-field>
      </form>
      <v-container align-center id="status">
        <v-alert color="error" v-if="error">{{error}}</v-alert>
        <v-progress-circular  v-if="isSearching" indeterminate color="primary"></v-progress-circular>
      </v-container>
      <book-list v-if="!isSearching && books" :books="books" />
    </v-flex>
  </v-layout>
</template>

<script>
import BookList from '~/components/BookList'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  components: {
    BookList
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