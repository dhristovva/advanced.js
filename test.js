let expect = require("chai").expect;
let sum = require("./index").sum;
describe("sum(arr) - sum array of numbers", function () {
    it("should return 5", function () {
        expect(sum(['2','3'])).to.be.equal(5);
    });
});
