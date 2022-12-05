 export class Calculatrice {
    constructor() {

    }
    resultat(valeur) {
        let resultat = eval(valeur);
        return resultat;
    }

    pourcentage(valeur) {
        var resultat = valeur/100 + "*";
        return resultat;
    }
}

