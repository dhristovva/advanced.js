let expect = require("chai").expect;
let createCalculator = require("./index").createCalculator;
describe("Total:", function () {
    it("should return 5", function () {
        expect(createCalculator((2+3),(10-5),5)).to.be.equal(5);
    });
});
