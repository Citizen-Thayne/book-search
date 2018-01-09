<template>
  <div class="book-card">
    <v-card raised>
      <v-container>
        <v-layout row>
          <img :src="thumbnailUrl" />
          <v-flex>
            <div>
              <div class="title black--text">{{title | trunc(64)}}</div>
              <div class="authors">{{authors}}</div>
            </div>
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
