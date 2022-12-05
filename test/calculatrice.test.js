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
    


    
})