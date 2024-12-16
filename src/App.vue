<template>
  <Header />
  <main class="container py-4">
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
