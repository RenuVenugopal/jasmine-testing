/*describe("Calculator", function() {
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
});*/
/*describe("Calculator", function() {
    var calc = new Calculator;
    //to clear the error occur last time we are using this built in function in jasmine
    beforeEach(function() {
        calc = new Calculator;
    });
    describe("Addition Tests", function() {
        it("should return 42", function() {
            calc.add(22);
            calc.add(20);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function() {
            calc.add(17);
            calc.add(9);
            expect(calc.value).toBe(26);
        });
        it("should return error if we don't supply numbers", function(){
            spyOn(window, "alert");
            calc.add("Hitchhikkers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});*/
describe("DrinkAbout", function() {
    describe("Appropriate drink Tests", function() {
        it("Sorry. I can’t tell what drink because that age is incorrect!", function() {
            expect(whatCanIDrink(22, 20)).toBe(42);
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