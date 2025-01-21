<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
.site-header {
  background-color: #42b983;
  color: white;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
}

.header-content h1 {
  font-size: 2.5em;
  margin-bottom: 0.5rem;
}

.slogan {
  font-size: 1.2em;
  opacity: 0.9;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 60px; /* Pour éviter que le contenu ne soit caché par le footer */
}
</style>