<script setup>
import { ref } from 'vue'

const formulaire = ref({
  nom: '',
  email: '',
  sujet: '',
  message: ''
})

const envoyerMessage = () => {
  // Pour l'instant, on affiche juste les données dans la console
  console.log('Message envoyé:', formulaire.value)
  // Réinitialiser le formulaire
  formulaire.value = {
    nom: '',
    email: '',
    sujet: '',
    message: ''
  }
}
</script>

<template>
  <div class="contact">
    <h2>Contactez-nous</h2>
    <form @submit.prevent="envoyerMessage" class="formulaire-contact">
      <div class="champ">
        <label for="nom">Nom</label>
        <input 
          type="text" 
          id="nom" 
          v-model="formulaire.nom" 
          required
        >
      </div>

      <div class="champ">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email" 
          v-model="formulaire.email" 
          required
        >
      </div>

      <div class="champ">
        <label for="sujet">Sujet</label>
        <input 
          type="text" 
          id="sujet" 
          v-model="formulaire.sujet" 
          required
        >
      </div>

      <div class="champ">
        <label for="message">Message</label>
        <textarea 
          id="message" 
          v-model="formulaire.message" 
          required
          rows="5"
        ></textarea>
      </div>

      <button type="submit" class="bouton-envoyer">Envoyer</button>
    </form>
  </div>
</template>

<style scoped>
.contact {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.formulaire-contact {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.champ {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

label {
  font-weight: bold;
  color: #2c3e50;
}

input, textarea {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
}

textarea {
  resize: vertical;
}

.bouton-envoyer {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;
}

.bouton-envoyer:hover {
  background-color: #3aa876;
}
</style>