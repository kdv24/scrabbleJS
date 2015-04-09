describe("scrabble", function() {
    it("will return a score of '1' for the word 'a' submitted by the user", function() {
        expect(scrabble('a')).to.equal(1);
    });

    it("will return a score of '2' for the word 'd' submitted by the user", function() {
        expect(scrabble('d')).to.equal(2);
    });

    it("will return a score of '2' for the word 'at'", function() {
        expect(scrabble('at')).to.equal(2);
    });
});
