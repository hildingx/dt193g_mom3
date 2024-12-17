<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <footer class="bg-light py-3">
    <Footer />
  </footer>
</template>

<script>
import { RouterView } from 'vue-router'
import Header from "./components/Header.vue";
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    RouterView,
    Footer
  }
}
</script>

<style scoped>

</style>
