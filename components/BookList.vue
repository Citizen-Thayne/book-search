<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 md6 v-for="book in books" :key="book.title">
        <book-card v-bind="book"></book-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BookCard from '~/components/BookCard'

export default {
  components: {
    BookCard
  },
  props: {
    books: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>
