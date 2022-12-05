const CalculatriceTest = require ('../src/calculatriceTest').CalculatriceTest;
const expect = require('chai').expect;


describe('Tester les fonctions de la calculatrice basique', function() {

    it('1. Verifier une addition ', function(done) {
        let c1 = new CalculatriceTest();
        expect(c1.resultat("4+4")).to.equal(8);
        done();
    });
    it('2. Verifier une multiplication ', function(done) {
        let c1 = new CalculatriceTest();
        expect(c1.resultat("4*4")).to.equal(16);
        done();
    });
    it('3. Verifier une soustration ', function(done) {
        let c1 = new CalculatriceTest();
        expect(c1.resultat("8-4")).to.equal(4);
        done();
    });
    it('4. Verifier une division ', function(done) {
        let c1 = new CalculatriceTest();
        expect(c1.resultat("16/2")).to.equal(8);
        done();
    });
    it('5. Verifier la priorite de calcul ', function(done) {
        let c1 = new CalculatriceTest();
        expect(c1.resultat("4+4*2")).to.equal(12);
        done();
    });
    it('5.2 Verifier la priorite de calcul ', function(done) {
        let c1 = new CalculatriceTest();
        expect(c1.resultat("4/4*2")).to.equal(2);
        done();
    });
    it('6. Verifier le pourcentage ', function(done) {
        let c1 = new CalculatriceTest();
        expect(c1.resultat(c1.pourcentage(12)+"200")).to.equal(24);
        done();
    });
    it('7. Verifier un resultat negatif ', function(done) {
        let c1 = new CalculatriceTest();
        expect(c1.resultat("25-200")).to.equal(-175);
        done();
    });
    it('8. Verifier la puissancecarre ', function(done) {
        let c1 = new CalculatriceTest();
        expect(c1.resultat(c1.puissanceCarre(2)+"+2")).to.equal(6);
        done();
    });
    it('9. Verifier le puissance X ', function(done) {
        let c1 = new CalculatriceTest();
        expect(c1.resultat(c1.puissanceX(2)+"3+15")).to.equal(23);
        done();
        // 3 signifie la puissance mais il a fallu simuler l'insertion avec le php
    });
    it('10. Verifier la racine carré ', function(done) {
        let c1 = new CalculatriceTest();
        expect(c1.resultat(c1.racine(16)+"+4")).to.equal(8);
        done();
    });
    

    


    
})