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
}
module.exports = {
    CalculatriceTest: CalculatriceTest
}

