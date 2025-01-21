<script setup>
import { ref, computed } from 'vue'
import { usePanierStore } from '../stores/panierStore'

const recherche = ref('')
const categorie = ref('tous')
const panier = usePanierStore()

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

const resultats = computed(() => {
  const terme = recherche.value.toLowerCase()
  const tousLesProduits = [...produits.velos, ...produits.accessoires]
  
  return tousLesProduits.filter(produit => {
    if (categorie.value === 'tous') {
      return produit.nom.toLowerCase().includes(terme) || 
             produit.description.toLowerCase().includes(terme)
    } else {
      return (produit.categorie.toLowerCase() === categorie.value) && 
             (produit.nom.toLowerCase().includes(terme) || 
              produit.description.toLowerCase().includes(terme))
    }
  })
})
</script>

<template>
  <div class="recherche">
    <h2>Rechercher un article</h2>
    
    <div class="barre-recherche">
      <input 
        type="text" 
        v-model="recherche" 
        placeholder="Rechercher un produit..."
        class="input-recherche"
      >
      
      <select v-model="categorie" class="select-categorie">
        <option value="tous">Toutes les catégories</option>
        <option value="VTT">VTT</option>
        <option value="Route">Route</option>
        <option value="Ville">Ville</option>
        <option value="accessoire">Accessoires</option>
      </select>
    </div>

    <div class="resultats">
      <div v-if="!recherche" class="message-initial">
        Commencez votre recherche en tapant un mot-clé
      </div>


      <div v-else-if="resultats.length === 0" class="aucun-resultat">
        Aucun résultat trouvé pour "{{ recherche }}"
      </div>
      
      <div v-else class="grille-resultats">
        <div v-for="produit in resultats" :key="produit.id" class="carte-produit">
          <img :src="produit.image" :alt="produit.nom">
          <div class="info-produit">
            <h3>{{ produit.nom }}</h3>
            <p class="categorie">{{ produit.categorie }}</p>
            <p class="description">{{ produit.description }}</p>
            <p class="prix">{{ produit.prix }} €</p>
            <button @click="panier.ajouterAuPanier(produit)" class="ajouter-panier">
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.message-initial {
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 1.2em;
}

.recherche {
  padding: 20px;
}

.barre-recherche {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.input-recherche {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
}

.select-categorie {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
}

.grille-resultats {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.carte-produit {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background: white;
}

.carte-produit img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.info-produit {
  padding: 10px 0;
}

.prix {
  font-size: 1.2em;
  color: #2c3e50;
  font-weight: bold;
  margin: 10px 0;
}

.ajouter-panier {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.aucun-resultat {
  text-align: center;
  padding: 20px;
  color: #666;
}
</style>