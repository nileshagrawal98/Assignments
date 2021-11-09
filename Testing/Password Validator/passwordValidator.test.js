const { passwordValidator } = require("./passwordValidator");

describe("Testing password validator, Password should have min 6 char, number, capital character, small character and symbol", () => {

    test("'asdf' should give error : 'Invalid: min 6 character is required, symbol is missing, number is missing, capital character is missing'", ()=> {
        expect(passwordValidator("asdf")).toBe("Invalid: min 6 character is required, symbol is missing, number is missing, capital character is missing");
    });

    test("'pAssWoRd' should give error : 'Invalid: symbol is missing, number is missing'", ()=> {
        expect(passwordValidator("pAssWoRd")).toBe("Invalid: symbol is missing, number is missing");
    });

    test("'pAs$WoRd' give error : 'Invalid: number is missing'", ()=> {
        expect(passwordValidator("pAs$WoRd")).toBe("Invalid: number is missing");
    });

    test("'9As$W0Rd' give error : 'Valid'", ()=> {
        expect(passwordValidator("9As$W0Rd")).toBe("Valid");
    });

    test("'9A$W0R' give error : 'Invalid: small character is missing'", ()=> {
        expect(passwordValidator("9A$W0R")).toBe("Invalid: small character is missing");
    });

    test("'a9A$' give error : 'Invalid: min 6 character is required'", ()=> {
        expect(passwordValidator("a9A$")).toBe("Invalid: min 6 character is required");
    });

    test("'987%^&asdf' give error : 'Invalid: capital character is missing'", ()=> {
        expect(passwordValidator("987%^&asdf")).toBe("Invalid: capital character is missing");
    });

    test("'' give error : 'Invalid: min 6 character is required, symbol is missing, number is missing, small character is missing, capital character is missing'", ()=> {
        expect(passwordValidator("")).toBe("Invalid: min 6 character is required, symbol is missing, number is missing, small character is missing, capital character is missing");
    });

    test("'N!1e$H' give error : 'Valid'", ()=> {
        expect(passwordValidator("N!1e$H")).toBe("Valid");
    });

    test("'Ez!0*Aud!ToR3*DAF!rAnz3' give error : 'Valid'", ()=> {
        expect(passwordValidator("Ez!0*Aud!ToR3*DA3F!rAnz3")).toBe("Valid");
    });

});