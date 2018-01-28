<template>
  <v-layout>
    <book-list :books="books" :title="collection.title"  />
  </v-layout>
</template>

<script>
import * as Collections from '~/api/bookCollections'
import * as Books from '~/api/books'

import BookList from '~/components/BookList'

export default {
  components: { BookList },
  async asyncData ({ params }) {
    const { id } = params
    const collection = await Collections.get(id)
    const books = await Books.getMany(collection.books)
    return {
      collection,
      books
    }
  },
  data: () => ({
    books: [],
    collection: {}
  })
}
</script>

<style>

</style>
