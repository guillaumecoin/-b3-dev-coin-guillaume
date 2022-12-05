 class CalculatriceTest {
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
    puissanceCarre(valeur) {
        var resultat = valeur + "**2";
        return resultat;
    }
    puissanceX(valeur) {
        var resultat = valeur + "**";
        return resultat;
    }
    racine(valeur) {
        var resultat = Math.sqrt(valeur);
        return resultat;
    }
}
module.exports = {
    CalculatriceTest: CalculatriceTest
}

