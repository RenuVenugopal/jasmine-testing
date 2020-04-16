describe(Calculator, function() {
    describe("Addition Tests", function() {
        it("should return 42", function() {
            expect(addition(22, 20)).toBe(42);
        });
    });
});