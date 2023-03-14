# -b3-dev-coin-guillaume

Projet Php donc à lancer avec un serveur comme wamp ou xamp (mac)
Le fichier index.php se trouve dans src/index.php

Les tests sont exécutés sur calculatricePourTest car un problème de module se déclenche lorsque je lance les tests.


Explication: 

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

Dans un premier temps les tests fonctionnels tels que addition, soustraction, multiplication et division ainsi que les opérations de type scientifique. 

Les tests au niveau de l’utilisation sont la vérification de la priorité de calcul ainsi que la prise en compte des résultats négatifs.





