const { timeToString } = require("./timeToString");

describe("timeToString function testing", () => {
    test("5200 should give 5 seconds", () => {
        expect(timeToString(5200)).toBe("5 seconds");
    });
    test("60000 should give 1 minute (Singular)", () => {
        expect(timeToString(60000)).toBe("1 minute");
    });
    test("180000 should give 3 minutes", () => {
        expect(timeToString(180000)).toBe("3 minutes");
    });
    test("200000 should give 3 minutes 20 seconds", () => {
        expect(timeToString(200000)).toBe("3 minutes 20 seconds");
    });
    test("1000 should give 1 second (Singular)", () => {
        expect(timeToString(1000)).toBe("1 second");
    });
    test("3600000 should give 1 hour (Singular)", () => {
        expect(timeToString(3600000)).toBe("1 hour");
    });
    test("36241000 should give 10 hours 4 minutes 1 second", () => {
        expect(timeToString(36241000)).toBe("10 hours 4 minutes 1 second");
    });
    test("3610995 should give 1 hour 10 seconds", () => {
        expect(timeToString(3610995)).toBe("1 hour 10 seconds");
    });

});