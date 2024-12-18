<template>
  <Header />
  <main>
    <!-- Dynamiskt innehåll -->
    <RouterView /> 
  </main>
  <Footer />
</template>

<script>
import { RouterView } from 'vue-router'; // Vue-router för att hantera rutter
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
