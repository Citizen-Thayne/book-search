<template>
  <div class="book-card">
    <v-card raised>
      <v-container class="book-card--container">
        <v-flex xs3>
          <v-card-media :src="thumbnailUrl" :contain="true" height="100px" />
        </v-flex>
        <v-flex xs9>
          <div class="title black--text">{{title | trunc(64)}}</div>
          <div class="authors">{{authors}}</div>
        </v-flex>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    authors: String,
    thumbnailUrl: String
  },
  filters: {
    trunc: (str, maxSize) => str.length > maxSize ? str.slice(0, maxSize).trim() + '...' : str
  }
}
</script>

<style>
.book-card--container {
  padding: 0;
}
</style>

