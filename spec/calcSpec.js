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
/*describe("My WhatCanIDrink function", function() {
    beforeEach(function() {
        drink = new whatCanIDrink();
    });
    describe("checks age", function() {
        it("should exist", function() {
            expect("whatCanIDrink").toBeDefined();
        });
       
        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });


        it("should return drink coke when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
        });

        it("should return drink beer when called as whatCanIDrink(18)", function() {
            var result = whatCanIDrink(18)
            expect(result).toBe("Drink Beer");
        });

        it("should return drink beer when called as whatCanIDrink(20)", function() {
            var result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        }); 

        it("should return drink whisky when called as whatCanIDrink(130)", function() {
            var result = whatCanIDrink(30)
            expect(result).toBe("Drink Whisky");
        });

        it("should be unable to return a drink when called as whatCanIDrink(140)", function() {
            var result = whatCanIDrink(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should contain Drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});*/
describe("My FizzBuzz Function", function() {
    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });
    describe("Returns fizzbuzz, fizz, buzz or number ", function() {
        
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });

        it("should return FizzBuzz asfizzBuzz(15)", function() {
            var newNumber = fizzBuzz(15);
            expect(newNumber).toBe("FizzBuzz");
        });

        it("should return Fizz as fizzBuzz(9)", function() {
            var newNumber = fizzBuzz(9);
            expect(newNumber).toBe("Fizz");
        });

        it("should return Buzz as fizzBuzz(10)", function() {
            var newNumber = fizzBuzz(10);
            expect(newNumber).toBe("Buzz");
        });
        
        it("should return 2 as fizzBuzz(2)", function() {
            var newNumber = fizzBuzz(2);
            expect(newNumber).toBe(2);
        });
    });
});