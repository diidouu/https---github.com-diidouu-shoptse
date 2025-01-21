<template>
  <div class="contact-container">
    <div class="contact-header">
      <h1>Contactez-nous</h1>
      <p>Notre équipe est à votre écoute</p>
    </div>

    <div class="contact-content">
      <div class="contact-info">
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <div>
            <h3>Notre adresse</h3>
            <p>123 rue des Vélos, 42000 Saint-Étienne</p>
          </div>
        </div>
        <div class="info-item">
          <i class="fas fa-phone"></i>
          <div>
            <h3>Téléphone</h3>
            <p>+33 4 77 XX XX XX</p>
          </div>
        </div>
        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <div>
            <h3>Email</h3>
            <p>contact@shoptse.fr</p>
          </div>
        </div>
      </div>

      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Nom</label>
          <input 
            type="text" 
            id="name" 
            v-model="form.name" 
            required
            :class="{ 'active': form.name }"
          />
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            required
            :class="{ 'active': form.email }"
          />
        </div>
        
        <div class="form-group">
          <label for="subject">Sujet</label>
          <select 
            id="subject" 
            v-model="form.subject"
            required
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="info">Demande d'information</option>
            <option value="order">Suivi de commande</option>
            <option value="support">Support technique</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea 
            id="message" 
            v-model="form.message" 
            required
            :class="{ 'active': form.message }"
          ></textarea>
        </div>
        
        <button type="submit" class="submit-btn">
          <span>Envoyer</span>
          <i class="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Ajoutez ici la logique d'envoi
      console.log('Form submitted:', this.form)
    }
  }
}
</script>

<style scoped>
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.contact-info {
  background: #42b983;
  padding: 3rem 2rem;
  color: white;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
}

.info-item i {
  font-size: 1.5rem;
}

.contact-form {
  padding: 3rem;
}

.form-group {
  margin-bottom: 1.5rem;
  position: relative;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
}

input, textarea, select {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #eee;
  border-radius: 8px;
  transition: all 0.3s ease;
}

input:focus, textarea:focus, select:focus {
  border-color: #42b983;
  outline: none;
}

textarea {
  height: 150px;
  resize: vertical;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: #3aa876;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>