const { taxCalculator } = require("./taxCalculator") ;

describe("Testing tax calculator", () => {

    test("Income: 200000 & Savings: 50000 should give 0", () => {
        expect(taxCalculator(200000, 50000)).toBe(0);
    });
    test("Income: 300000 & Savings: 70000 should give 26500", () => {
        expect(taxCalculator(300000, 70000)).toBe(26500);
    });
    test("Income: 650000 & Savings: 0 should give 130000", () => {
        expect(taxCalculator(650000, 0)).toBe(130000);
    });
    test("Income: 1500000 & Savings: 500000 should give 435000", () => {
        expect(taxCalculator(1500000, 500000)).toBe(435000);
    });
    test("Income: 900000 & Savings: 100000 should give 174000", () => {
        expect(taxCalculator(900000, 100000)).toBe(174000);
    });
    test("Income: 100000 & Savings: 500000 should give 'Saving can't be greater than income'", () => {
        expect(taxCalculator(100000, 500000)).toBe("Saving can't be greater than income");
    });
    test("Income: 6000000 & Savings: 4000000 should give 1785000", () => {
        expect(taxCalculator(6000000, 4000000)).toBe(1785000);
    });
    test("Income: 500000 & Savings: 500000 should give 35000", () => {
        expect(taxCalculator(500000, 500000)).toBe(35000);
    });

})