# -b3-dev-coin-guillaume
Les tests sont exécutés sur calculatricePourTest car un problème de module se déclenche lorsque je lance les tests.


Explication : 

avec ce type d’exportation les tests marche mais l’application non

 module.exports = {
Calculatrice : Calculatrice
}

Et avec une exportation classique export class calculatrice ce sont les tests qui ne marchent pas. 

Veuillez m’excuser pour ce désagrément mais le contenue des classes est le même.



Guide d'utilisation : 

Le fichier permettant le démarrage est le index.php qu’il faut ouvrir grâce à un serveur wamp
Insérer le calcul souhaité puis appuyer sur le = pour avoir le résultat.

Spécificitée : 

- les pourcentages :  insérer en premier le pourcentage à appliquer puis le montant



Plan de test : 

- Réalisation des fonctionnalités basiques en BDD
- Réalisation des fonctionnalités avancées tel que racine, puissance réalisé en TDD

Exécuter les tests avec npm test




