<template>
  <v-list>
    <template v-for="item in items">
      <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
      <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
      <v-list-tile avatar v-else v-bind:key="item.title" @click="">
        <v-list-tile-avatar>
          <img v-bind:src="item.avatar">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="item.title"></v-list-tile-title>
          <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
  <!-- <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex v-for="book in books" :key="book.title" xs12>
        <book-card v-bind="book"></book-card>
      </v-flex>
    </v-layout>
  </v-container> -->
</template>

<script>
import _ from 'lodash'

export default {

  props: {
    books: {
      type: Array,
      required: true
    }
  },
  computed: {
    items () {
      let items = this.books.map(book => {
        return [
          {
            avatar: book.thumbnailUrl,
            title: book.title,
            subtitle: book.authors
          },
          {
            divider: true,
            inset: true
          }
        ]
      })
      items = _.flatten(items)
      items.splice(-1, 1)
      return items
    }
  }
}
</script>

<style>

</style>
