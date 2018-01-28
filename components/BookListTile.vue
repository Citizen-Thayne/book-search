<template>
  <v-list-tile avatar @click="clickHandler(book.id)">
    <v-list-tile-avatar>
      <img v-bind:src="thumbnail">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title v-html="book.volumeInfo.title"></v-list-tile-title>
      <v-list-tile-sub-title v-html="book.volumeInfo.subtitle"></v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  computed: {
    thumbnail () {
      return this.book.volumeInfo.imageLinks.smallThumbnail
    }
  }
}
</script>