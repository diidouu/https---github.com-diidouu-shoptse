<script setup>
import { usePanierStore } from '../../stores/panierStore'

const panier = usePanierStore()
</script>

<template>
  <div class="panier">
    <h2>Mon Panier ({{ panier.nombreArticles }})</h2>
    <div v-if="panier.articles.length === 0" class="panier-vide">
      Votre panier est vide
    </div>
    <div v-else class="articles">
      <div v-for="article in panier.articles" :key="article.id" class="article">
        <img :src="article.image" :alt="article.nom">
        <div class="details">
          <h3>{{ article.nom }}</h3>
          <p>{{ article.prix }} €</p>
          <div class="quantite">
            <button @click="panier.modifierQuantite(article.id, article.quantite - 1)" 
                    :disabled="article.quantite <= 1">-</button>
            <span>{{ article.quantite }}</span>
            <button @click="panier.modifierQuantite(article.id, article.quantite + 1)">+</button>
          </div>
        </div>
        <button class="supprimer" @click="panier.supprimerDuPanier(article.id)">×</button>
      </div>
      <div class="total">
        Total: {{ panier.total.toFixed(2) }} €
      </div>
    </div>
  </div>
</template>

<style scoped>
.panier {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 20px 0;
}

.article {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.article img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 15px;
}

.details {
  flex: 1;
}

.quantite {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantite button {
  background: #42b983;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.supprimer {
  background: #ff4444;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.total {
  margin-top: 20px;
  text-align: right;
  font-weight: bold;
  font-size: 1.2em;
}
</style>