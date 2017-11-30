<template>
  <v-layout>
    <v-flex text-xs-center>
      <form @submit.prevent="search">
        <v-text-field 
        name="search" 
        label="Search Books" 
        id="book-search" 
        v-model="searchInput"></v-text-field>
      </form>
      <div class="container" v-for="result in results" :key="result.title">
        <div class="flex xs12">
          <book-card v-bind="result"></book-card>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import books from '~/api/books'
import BookCard from '~/components/BookCard'

export default {
  components: {
    BookCard
  },
  data: function () {
    return {
      searchInput: '',
      results: []
    }
  },
  methods: {
    async search () {
      var searchResults = await books.search(this.searchInput)
      this.results = searchResults.items.map(item => {
        const volumeInfo = item.volumeInfo
        return {
          title: volumeInfo.title,
          authors: volumeInfo.authors.join(', '),
          thumbnailUrl: volumeInfo.imageLinks.thumbnail
        }
      })
    }
  }
}
</script>