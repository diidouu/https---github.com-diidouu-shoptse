<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="site-header">
    <div class="header-content">
      <h1>Shop'TSE</h1>
      <p class="slogan">Votre boutique de vélos de confiance</p>
      <nav>
        <router-link to="/">Accueil</router-link> |
        <router-link to="/catalogue">Catalogue</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/recherche">Rechercher</router-link> |
        <router-link to="/panier">Panier</router-link>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
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
}
</style>