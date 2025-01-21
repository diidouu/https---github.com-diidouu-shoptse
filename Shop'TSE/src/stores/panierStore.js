import { defineStore } from 'pinia'

export const usePanierStore = defineStore('panier', {
  state: () => ({
    articles: []
  }),
  actions: {
    ajouterAuPanier(produit) {
      const articleExistant = this.articles.find(item => item.id === produit.id)
      if (articleExistant) {
        articleExistant.quantite++
      } else {
        this.articles.push({ ...produit, quantite: 1 })
      }
    },
    supprimerDuPanier(produitId) {
      this.articles = this.articles.filter(item => item.id !== produitId)
    },
    modifierQuantite(produitId, quantite) {
      const article = this.articles.find(item => item.id === produitId)
      if (article) {
        article.quantite = quantite
      }
    }
  },
  getters: {
    nombreArticles: (state) => state.articles.reduce((total, item) => total + item.quantite, 0),
    total: (state) => state.articles.reduce((total, item) => total + (item.prix * item.quantite), 0)
  }
})