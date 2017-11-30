<template>
  <div class="book-card">
    <v-card color="blue-grey darken-2" class="white--text">
      <v-container>
        <v-layout row>
          <v-flex xs7>
            <div>
              <div class="title">{{title | trunc(32)}}</div>
              <div class="authors">{{authors}}</div>
            </div>
          </v-flex>
          <v-flex xs5>
            <v-card-media :src="thumbnailUrl" height="100px" contain></v-card-media>
          </v-flex>
        </v-layout>
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
