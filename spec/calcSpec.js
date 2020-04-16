describe("Calculator", function() {
    describe("Addition Tests", function() {
        it("should return 42", function() {
            expect(addition(22, 20)).toBe(42);
        });
        it("should return 26", function() {
            expect(addition(17,9)).toBe(26);
        });
        it("should return an error if we don't supply two numbers", function() {
            //expect(addition("Hitchhikers", "Guide")).toBe("Error!");
            spyOn(window, "alert");
            addition("Hitchhikkers", "Guide");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});