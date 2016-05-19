var app = require('../js/script.js');

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        var powResult;

        powResult = app.pow(2, 2);



        expect(powResult).toBe(4);
    });
});
