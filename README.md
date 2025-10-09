# Country App

Country App est une application React qui permet de découvrir les pays du monde avec leurs drapeaux, capitales et populations.  
Elle utilise l'API [REST Countries](https://restcountries.com/) pour récupérer les données en temps réel.

## Fonctionnalités

- Affichage d'une liste de pays avec drapeau, nom, capitale et population
- Filtrage par continent (Afrique, Amérique, Asie, Europe, Océanie)
- Limitation du nombre de pays affichés via un curseur
- Interface responsive et interactive avec effets au survol des cartes

## Stack technique

- React
- React Router (routing Home / About)
- Axios pour récupérer les données de l'API
- SCSS pour le style

## Structure du projet

country-app/
├─ public/
│ └─ index.html
├─ src/
│ ├─ App.js
│ ├─ index.js
│ ├─ assets/
│ │ ├─ fonts/
│ │ └─ img/
│ ├─ components/
│ │ ├─ Card.js
│ │ ├─ Countries.js
│ │ ├─ Logo.js
│ │ └─ Navigation.js
│ ├─ pages/
│ │ ├─ Home.js
│ │ └─ About.js
│ └─ styles/
│ ├─ components/
│ │ ├─ card.scss
│ │ ├─ countries.scss
│ │ ├─ logo.scss
│ │ └─ navigation.scss
│ ├─ settings.scss
│ └─ index.scss

## Installation et lancement

```bash
git clone <URL_DU_REPO>
npm install
npm start
```

L'application sera accessible sur http://localhost:3000.

---

A propos

Projet réalisé dans le cadre de ma reconversion en développement web.
Objectif : pratiquer React, la consommation d'API et la gestion d'état.

Note pour le recruteur / visiteur : ce projet montre ma capacité à créer une application React complète avec composants réutilisables, state management, routing et consommation d'une API externe.
