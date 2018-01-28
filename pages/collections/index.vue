<template>
  <div>
    <p v-for="(c, id) in collections" :key="id"></p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  asyncData ({store}) {
    store.dispatch('collections/getMyCollections')
  },
  computed: {
    ...mapState('collections', ['collections'])
  }
}
</script>

<style>

</style>
