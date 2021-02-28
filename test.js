let expect = require("chai").expect;
let isSymmetric = require("./index").isSymmetric;
describe("This array  is:", function () {
    it("should return false", function () {
        expect(isSymmetric(2,3)).to.be.equal(false);
    });
});
