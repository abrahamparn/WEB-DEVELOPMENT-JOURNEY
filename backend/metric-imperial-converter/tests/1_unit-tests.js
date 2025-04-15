/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  suite("Function convertHandler.getNum(input)", () => {
    test("convertHandler should correctly read a whole number input.", (done) => {
      assert.equal(convertHandler.getNum("32L"), 32);
      done();
    });

    test("convertHandler should correctly read a decimal number input.", (done) => {
      assert.equal(convertHandler.getNum("32.2L"), 32.2);
      done();
    });

    test("convertHandler should correctly read a fractional input.", (done) => {
      assert.equal(convertHandler.getNum("32/3L"), 32 / 3);
      done();
    });

    test("convertHandler should correctly read a fractional input with a decimal.", (done) => {
      assert.equal(convertHandler.getNum("9/3.3L"), 9 / 3.3);
      done();
    });

    test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).", (done) => {
      assert.equal(convertHandler.getNum("32/3/3L"), "invalid number");
      done();
    });

    test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.", (done) => {
      let input = [
        "gal",
        "l",
        "mi",
        "km",
        "lbs",
        "kg",
        "GAL",
        "L",
        "MI",
        "KM",
        "LBS",
        "KG",
      ];
      input.forEach((item) => {
        assert.equal(convertHandler.getNum(item), 1);
      });

      done();
    });
  });

  suite("Function convertHandler.getUnit(input)", () => {
    test("convertHandler should correctly read each valid input unit.", (done) => {
      let input = [
        "gal",
        "l",
        "mi",
        "km",
        "lbs",
        "kg",
        "GAL",
        "L",
        "MI",
        "KM",
        "LBS",
        "KG",
      ];
      let output = [
        "gal",
        "L",
        "mi",
        "km",
        "lbs",
        "kg",
        "gal",
        "L",
        "mi",
        "km",
        "lbs",
        "kg",
      ];
      input.forEach((ele, index) => {
        assert.equal(convertHandler.getUnit(ele), output[index]);
      });
      done();
    });

    test("convertHandler should correctly return an error for an invalid input unit.", (done) => {
      assert.equal(convertHandler.getUnit("34kilograms"), "invalid unit");
      done();
    });
  });

  suite("Function convertHandler.getReturnUnit(initUnit)", () => {
    test("convertHandler should return the correct return unit for each valid input unit.", (done) => {
      let input = ["gal", "l", "mi", "km", "lbs", "kg"];
      let expect = ["L", "gal", "km", "mi", "kg", "lbs"];
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.spellOutUnit(unit)", () => {
    test("convertHandler should correctly return the spelled-out string unit for each valid input unit.", (done) => {
      let input = ["gal", "l", "mi", "km", "lbs", "kg"];
      let expect = [
        "gallons",
        "liters",
        "miles",
        "kilometers",
        "pounds",
        "kilograms",
      ];
      input.forEach((ele, i) => {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.convert(num, unit)", () => {
    test("convertHandler should correctly convert gal to L", (done) => {
      let input = [5, "gal"];
      let expected = 18.9271;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("convertHandler should correctly convert L to gal", (done) => {
      let input = [5, "l"];
      let expected = 1.32086;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("convertHandler should correctly convert mi to km", (done) => {
      let input = [5, "mi"];
      let expected = 8.0467;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("convertHandler should correctly convert km to mi", (done) => {
      let input = [5, "km"];
      let expected = 3.10686;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("convertHandler should correctly convert lbs to kg", (done) => {
      let input = [5, "lbs"];
      let expected = 2.26796;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("Kg to Lbs", (done) => {
      let input = [5, "kg"];
      let expected = 11.02312;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });
  });
});
