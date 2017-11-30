<template>
  <v-card color="blue-grey darken-2" class="white--text">
    <v-container>
      <v-layout row>
        <v-flex xs7>
          <div>
            <div class="headline">{{title}}</div>
            <div>{{authors}}</div>
          </div>
        </v-flex>
        <v-flex xs5>
          <v-card-media :src="thumbnailUrl" height="125px" contain></v-card-media>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    authors: String,
    thumbnailUrl: String
  }
}
</script>