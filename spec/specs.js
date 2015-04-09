describe("scrabble", function() {
    it("will return a score of '1' for the 'a' submitted by the user", function() {
        expect(scrabble('a')).to.equal(1);
    });
});
