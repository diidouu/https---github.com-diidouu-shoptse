<script setup>
import { ref, computed } from 'vue'
import { usePanierStore } from '../stores/panierStore'

const panier = usePanierStore()
const categorieSelectionnee = ref('tous')
const prixMax = ref(3000)

const produitsFiltres = computed(() => {
  let velosFiltres = produits.velos
  let accessoiresFiltres = produits.accessoires

  // Filtre par catégorie
  if (categorieSelectionnee.value !== 'tous') {
    velosFiltres = produits.velos.filter(velo => 
      velo.categorie === categorieSelectionnee.value
    )
    accessoiresFiltres = produits.accessoires.filter(acc => 
      acc.categorie === categorieSelectionnee.value
    )
  }

  // Filtre par prix
  velosFiltres = velosFiltres.filter(velo => velo.prix <= prixMax.value)
  accessoiresFiltres = accessoiresFiltres.filter(acc => acc.prix <= prixMax.value)

  return {
    velos: velosFiltres,
    accessoires: accessoiresFiltres
  }
})

const produits = {
  velos: [
    {
      id: 1,
      nom: "VTT",
      categorie: "VTT",
      prix: 899.99,
      image: "/images/vtt.jpg",
      description: "VTT polyvalent pour sentiers techniques",
      specifications: {
        cadre: "Aluminium 6061",
        fourche: "Suspension 140mm",
        transmission: "Shimano Deore 12v",
        freins: "Disque hydraulique"
      }
    },
    {
      id: 2,
      nom: "Route Endurance",
      categorie: "Route",
      prix: 1299.99,
      image: "/images/velo-route.jpg",
      description: "Vélo de route confortable",
      specifications: {
        cadre: "Carbone T700",
        fourche: "Carbone",
        transmission: "Shimano 105 11v",
        freins: "Disque"
      }
    },
    {
      id: 3,
      nom: "VTT Enduro",
      categorie: "VTT",
      prix: 2499.99,
      image: "/images/vtt-enduro.jpg",
      description: "VTT performant pour la descente et l'enduro",
      specifications: {
        cadre: "Aluminium 7005",
        fourche: "Suspension 160mm",
        transmission: "SRAM GX Eagle 12v",
        freins: "Disque hydraulique 200mm"
      }
    },
    {
      id: 4,
      nom: "Gravel Adventure",
      categorie: "Gravel",
      prix: 1799.99,
      image: "/images/gravel.jpg",
      description: "Vélo polyvalent pour route et chemins",
      specifications: {
        cadre: "Aluminium Gravel",
        fourche: "Carbone",
        transmission: "Shimano GRX 11v",
        freins: "Disque hydraulique"
      }
    },
    {
      id: 5,
      nom: "Vélo Urbain",
      categorie: "Ville",
      prix: 699.99,
      image: "/images/urbain.jpg",
      description: "Vélo confortable pour la ville",
      specifications: {
        cadre: "Aluminium City",
        fourche: "Rigide",
        transmission: "Shimano Nexus 7v",
        freins: "V-Brake"
      }
    },
    {
      id: 6,
      nom: "VTT Cross-Country",
      categorie: "VTT",
      prix: 1499.99,
      image: "/images/vtt-cross-country.jpg",
      description: "VTT léger pour la compétition XC",
      specifications: {
        cadre: "Carbone XC",
        fourche: "Suspension 100mm",
        transmission: "SRAM X01 Eagle 12v",
        freins: "Disque hydraulique"
      }
    },
    {
      id: 7,
      nom: "Vélo de Piste",
      categorie: "Piste",
      prix: 999.99,
      image: "/images/piste.jpg",
      description: "Vélo de piste pour la vitesse",
      specifications: {
        cadre: "Acier Hi-Ten",
        fourche: "Rigide",
        transmission: "Fixie",
        freins: "Aucun"
      }
    },
    {
      id: 8,
      nom: "Vélo Cargo",
      categorie: "Ville",
      prix: 1999.99,
      image: "/images/cargo.jpg",
      description: "Vélo cargo pour transporter des charges",
      specifications: {
        cadre: "Acier",
        fourche: "Rigide",
        transmission: "Shimano Nexus 8v",
        freins: "Disque hydraulique"
      }
    }

  ],
  accessoires: [
    {
      id: 5,
      nom: "Casque",
      prix: 49.99,
      categorie: "accessoire",
      image: "/images/casque.jpg",
      description: "Casque de protection homologué",
      specifications: {
        taille: "M/L (56-62cm)",
        poids: "280g",
        certification: "CE EN 1078",
        ventilation: "15 aérations"
      }
    },
    {
      id: 7,
      nom: "Pompe à vélo",
      prix: 29.99,
      categorie: "accessoire",
      image: "/images/pompe.jpg",
      description: "Pompe portable haute pression",
      specifications: {
        pression_max: "120 PSI",
        longueur: "23cm",
        compatibilite: "Presta/Schrader",
        materiau: "Aluminium"
      }
    },
    {
      id: 8,
      nom: "Éclairage LED",
      prix: 39.99,
      categorie: "accessoire",
      image: "/images/eclairage.jpg",
      description: "Kit éclairage avant/arrière rechargeable",
      specifications: {
        puissance: "600 lumens avant",
        autonomie: "4h en haute intensité",
        recharge: "USB-C",
        etancheite: "IPX4"
      }
    },
    {
      id: 9,
      nom: "Sacoche Vélo",
      prix: 59.99,
      categorie: "accessoire",
      image: "/images/sacoche.jpg",
      description: "Sacoche étanche pour porte-bagages",
      specifications: {
        volume: "20L",
        materiau: "Polyester 600D",
        etancheite: "IPX5",
        fixation: "Universelle"
      }
    },
    {
      id: 10,
      nom: "Cuissard",
      prix: 45.99,
      categorie: "accessoire",
      image: "/images/cuissard.jpg",
      description: "Cuissard rembourré confortable",
      specifications: {
        taille: "S à XXL",
        tissu: "80% Polyamide, 20% Élasthanne",
        peau: "Gel haute densité",
        usage: "Route/VTT"
      }
    },
    {
      id: 11,
      nom: "Bidon",
      prix: 9.99,
      categorie: "accessoire",
      image: "/images/bidon.jpg",
      description: "Bidon 750ml pour hydratation",
      specifications: {
        capacite: "750ml",
        materiau: "Polypropylene",
        bouchon: "Sport"
      }
    },
    {
      id: 12,
      nom: "Gants",
      prix: 29.99,
      categorie: "accessoire",
      image: "/images/gants.jpg",
      description: "Gants de cyclisme confortables",
      specifications: {
        taille: "S à XL",
        tissu: "Lycra, Microfibre",
        rembourrage: "Gel",
        usage: "Route/VTT"
      }
    },
    {
      id: 13,
      nom: "Antivol",
      prix: 39.99,
      categorie: "accessoire",
      image: "/images/antivol.jpg",
      description: "Antivol en U haute sécurité",
      specifications: {
        securite: "Niveau 12",
        longueur: "30cm",
        poids: "1.2kg",
        clefs: "3"
      }
    }
  ]
}
</script>

<template>
  <div class="catalogue">
    <div class="filtres">
      <div class="filtre-categorie">
        <label for="categorie">Catégorie:</label>
        <select v-model="categorieSelectionnee" id="categorie">
          <option value="tous">Toutes les catégories</option>
          <option value="VTT">VTT</option>
          <option value="Route">Route</option>
          <option value="Ville">Ville</option>
          <option value="Gravel">Gravel</option>
          <option value="Piste">Piste</option>
          <option value="accessoire">Accessoires</option>
        </select>
      </div>

      <div class="filtre-prix">
        <label for="prix">Prix maximum: {{ prixMax }}€</label>
        <input 
          type="range" 
          id="prix" 
          v-model="prixMax" 
          min="0" 
          max="3000" 
          step="100"
        >
      </div>
    </div>

    <h2>Nos Vélos</h2>
    <div class="grille-produits">
      <div v-for="velo in produitsFiltres.velos" :key="velo.id" class="carte-produit">
        <img :src="velo.image" :alt="velo.nom">
        <div class="info-produit">
          <h3>{{ velo.nom }}</h3>
          <p class="categorie">{{ velo.categorie }}</p>
          <p class="description">{{ velo.description }}</p>
          <div class="specifications">
            <h4>Spécifications:</h4>
            <ul>
              <li><strong>Cadre:</strong> {{ velo.specifications.cadre }}</li>
              <li><strong>Fourche:</strong> {{ velo.specifications.fourche }}</li>
              <li><strong>Transmission:</strong> {{ velo.specifications.transmission }}</li>
              <li><strong>Freins:</strong> {{ velo.specifications.freins }}</li>
            </ul>
          </div>
          <p class="prix">{{ velo.prix }} €</p>
          <button class="ajouter-panier" @click="panier.ajouterAuPanier(velo)">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>

    <h2>Accessoires</h2>
    <div class="grille-produits">
      <div v-for="accessoire in produitsFiltres.accessoires" :key="accessoire.id" class="carte-produit">
        <img :src="accessoire.image" :alt="accessoire.nom">
        <div class="info-produit">
          <h3>{{ accessoire.nom }}</h3>
          <p class="categorie">{{ accessoire.categorie }}</p>
          <p class="description">{{ accessoire.description }}</p>
          <div class="specifications">
            <h4>Spécifications:</h4>
            <ul>
              <li v-for="(value, key) in accessoire.specifications" :key="key">
                <strong>{{ key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ') }}:</strong> {{ value }}
              </li>
            </ul>
          </div>
          <p class="prix">{{ accessoire.prix }} €</p>
          <button class="ajouter-panier" @click="panier.ajouterAuPanier(accessoire)">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalogue {
  padding: 20px;
}

.grille-produits {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.carte-produit {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
}

.carte-produit img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.carte-produit h3 {
  margin: 10px 0;
  color: #333;
}

.prix {
  font-size: 1.2em;
  color: #2c3e50;
  font-weight: bold;
}

.ajouter-panier {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.ajouter-panier:hover {
  background-color: #3aa876;
}

.specifications {
  text-align: left;
  margin: 15px 0;
  padding: 10px;
  background-color: #f8f8f8;
  border-radius: 4px;
}

.specifications h4 {
  margin-bottom: 8px;
  color: #42b983;
}

.specifications ul {
  list-style: none;
  padding: 0;
}

.specifications li {
  margin: 5px 0;
  font-size: 0.9em;
}

.categorie {
  color: #666;
  font-size: 0.9em;
  margin: 5px 0;
}

.description {
  margin: 10px 0;
  color: #2c3e50;
}
</style>