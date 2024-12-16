<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>

<script>
import { RouterView } from 'vue-router'
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
    RouterView
  }
}
</script>



<style scoped>

</style>
