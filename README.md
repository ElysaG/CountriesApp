# Countries App

Countries App est une application React qui permet de découvrir les pays du monde avec leurs drapeaux, capitales et populations.  
Elle utilise l'API [REST Countries](https://restcountries.com/) pour récupérer les données en temps réel.

**Projet réalisé AVANT ma formation à La Capsule dans le cadre de mon auto-apprentissage du développement web (React, SCSS, consommation d’API, routing).**

## Fonctionnalités

- Affichage d'une liste de pays avec drapeau, nom, capitale et population
- Filtrage par continent (Afrique, Amérique, Asie, Europe, Océanie)
- Limitation du nombre de pays affichés via un curseur
- Interface responsive et interactive avec effets au survol des cartes

## Stack technique

- React
- React Router (routing Home / About)
- SCSS (architecture de styles, variables, modules)
- Fetch API / Axios pour récupérer les données
- REST Countries API

## Structure du projet
```
CountriesApp/
├── public/
│   ├── index.html
│   └── ...
└── src/
    ├── App.js
    ├── index.js
    ├── assets/
    │   ├── fonts/
    │   └── img/
    ├── components/
    │   ├── Card.js
    │   ├── Countries.js
    │   ├── Logo.js
    │   └── Navigation.js
    ├── pages/
    │   ├── Home.js
    │   └── About.js
    └── styles/
        ├── components/
        │   ├── card.scss
        │   ├── countries.scss
        │   ├── logo.scss
        │   └── navigation.scss
        ├── settings.scss
        └── index.scss
```
## Installation et lancement

```bash
git clone https://github.com/ElysaG/CountriesApp.git
npm install
npm start
```

L'application sera accessible sur http://localhost:3000.

---

## A propos

Ce projet a été réalisé avant ma formation diplômante Concepteur Développeur d’Applications à La Capsule, dans une phase d’auto-apprentissage.

### Objectifs personnels du projet :
- Prendre en main React et sa logique de composants
- Comprendre la gestion d’état (useState, useEffect)
- Apprendre à faire des requêtes HTTP vers une API
- Mettre en place un routing (navigation multi-pages)
- Structurer une application avec plusieurs composants réutilisables
- Utiliser SCSS pour un style plus structuré et maintenable

### Ce que montre ce projet :
- Capacité à construire une application React complète
- Consommation d’API publique
- Mise en place d’un système de filtre dynamique
- Architecture front propre et lisible
- Maîtrise du SCSS, variables et structuration CSS

## Améliorations possibles

- Ajout d’une barre de recherche par nom de pays
- Tri par population, alphabétique, ou région
- Ajout d’une page de détails pour chaque pays
- Refactorisation en TypeScript
- Intégration d’un système de thème (clair / sombre)
- Optimisation des perfs avec React.memo et lazy loading
