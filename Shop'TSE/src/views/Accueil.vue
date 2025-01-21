<template>
  <div class="accueil-container">
    <div class="accueil-header">
      <h1>Bienvenue chez Shop'TSE</h1>
      <p>Votre boutique de vélos de confiance</p>
    </div>

    <div class="accueil-content">
      <section class="categories">
        <h2>Nos Catégories</h2>
        <div class="categories-grid">
          <div class="categorie">
            <img src="https://placehold.co/300x200" alt="VTT">
            <h3>VTT</h3>
          </div>
          <div class="categorie">
            <img src="https://placehold.co/300x200" alt="Route">
            <h3>Route</h3>
          </div>
          <div class="categorie">
            <img src="https://placehold.co/300x200" alt="Ville">
            <h3>Ville</h3>
          </div>
        </div>
      </section>

      <section class="promotions">
        <h2>Nos Promotions</h2>
        <div class="promo-grid">
          <div class="promo-item">
            <h3>-20% sur les VTT</h3>
            <p>Offre limitée</p>
          </div>
          <div class="promo-item">
            <h3>Accessoires</h3>
            <p>2 achetés = 1 offert</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.accueil-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.accueil-header {
  text-align: center;
  margin-bottom: 3rem;
}

.accueil-content {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  padding: 3rem;
}

.categories-grid, .promo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.categorie, .promo-item {
  text-align: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}

.categorie img, .promo-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.categorie h3, .promo-item h3 {
  margin-top: 1rem;
  color: #333;
}

.promo-item p {
  margin-top: 0.5rem;
  color: #666;
}
</style>