# Checkpoint 1 - JS

**!!! PREMIERE ETAPE OBLIGATOIRE AVANT DE COMMENCER LE PREMIER EXERCICE !!!**

-----------------------------------
* Clone ce projet
* Crée une branche "ville_nom_prenom", qui va contenir ton avancée. (ville_nom_prenom sera remplacé par la ville de ton campus, ton nom et ton prénom...)

## Pré-requis (outils installés)

* NodeJS
* npm
* [Checkpoint Quiz (wcs-checkpoints-quiz)](https://www.npmjs.com/package/wcs-checkpoints-quiz)

-----------------------------------
__A chaque fois que tu complètes un exercice:__
* Fais un commit avec un message EXPLICITE sur ta branche.
* Fais un push de ta branche.

-----------------------------------
## Partie 1: Q.C.M.

* Pour lancer le qcm, ouvre un terminal à la racine de ce projet, et tape la commande suivante :

```sh
wcs-checkpoints-quiz start
```
* Suis les instructions présentes dans le terminal.
* Réponds aux questions qui te seront posées.
* Une fois le quiz terminé, n'oublie pas de commiter le fichier de réponses.


-----------------------------------
## Partie 2: Algorithme JS.

Réalise l'ensemble des algos présents

> [algo1.js](./algo1.js)

> [algo2.js](./algo2.js)

-----------------------------------

## Partie 3: Galerie de photos de cuisine

Fichiers à utiliser :

* [index.html](./index.html)
* [index.css](./index.css)
* [index.js](./index.js) _pour le bonus_

Crée une grille de photos de cuisine, en utilisant les photos présentes sur le site suivant:

Urls de photos:
https://pixabay.com/fr/images/search/recipe/?orientation=horizontal

Ces photos devront être disposés sous forme de grille, de manière "responsive", en respectant le format suivant :

* Desktop: 4x6
* Tablette: 2x12
* Smartphone: 1x24

Affiche au moins 12 photos de cuisine pour tester le côté responsive de ton site.
L'utilisation de Bootstrap n'est pas obligatoire, à toi de choisir entre l'utiliser ou non au sein de ton projet.

**[Bonus (si tu as le temps)]**

Tu vas maintenant ajouter un peu de "dynamisme" à ton projet :

* Au chargement de ton application, tu ne vas afficher que les 3 premières photos de ta grille.
* Ajouter un bouton "Voir plus" qui va permettre d'afficher le reste des photos.
* Ajouter un bouton "Voir moins" qui va cacher toutes les photos mis à part les 3 premières.
* Dans l'idéal, ton application ne comportera qu'un seul bouton affiché à la fois.
