<template>
  <v-card>
    <v-list>
      <template v-for="item in Array.from(items)"> 
        <v-subheader v-if="item.header" v-text="item.header"/>
        <book-list-tile v-else-if="item.book" :book="item.book" />
      </template>
    </v-list>
  </v-card>
</template>

<script>
import BookListTile from '~/components/BookListTile'

export default {
  components: { BookListTile },
  props: {
    books: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: false
    }
  },
  methods: {
    clickHandler (bookId) {
      this.$emit('book-clicked', bookId)
    }
  },
  computed: {
    * items () {
      if (this.title) {
        yield {
          header: this.title
        }
      }
      yield * this.books.map(book => ({ book }))
    }
  }
}
</script>
