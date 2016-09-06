var expect = require('chai').expect;
var dinosaurs = require('./index');

describe('dinosaurs', function(){
    it('should work', function(){
        expect(true).to.be.true;
    });
});

describe('dino-name', function() {
    describe('all', function() {
        it('should be an array of strings', function() {
            expect(dinosaurs.all).to.satisfy(isArrayOfStrings);
            function isArrayOfStrings(array) {
                return array.every(function(item){
                    return typeof item === 'string';
                });
            }
        });

        it('should contain the dino breed "Coelurosauria', function(){
            expect(dinosaurs.all).to.include('Coelurosauria');
        });
    });
    describe('random', function() {
        it('should return a random dino breed', function(){
            var randomItem = dinosaurs.random();
            expect(dinosaurs.all).to.include(randomItem);
        });
    });
});