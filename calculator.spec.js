describe("calculator.js", function () {
  
  describe("Calculator", function () {
    let calculator;
    let calculator2;

    beforeEach(function () {
      // Anything inside this block executes before
      // each spec (it) inside this describe.
      calculator = new Calculator();
      calculator2 = new Calculator();
    });

    afterEach(function () {
      // Anything inside this block executes after
      // each spec (it) inside this describe.
    });

    it("sould initialize the total", function () {

      expect(calculator.total).toBe(0);
      expect(calculator.total).toBeFalsy();
    });

    it("can be instantiated", function () {
      // jasmine.addMatchers(customMatchers);


      // expect(calculator).toBeCalculator(); // custom!
      expect(calculator).toBeTruthy();
      expect(calculator2).toBeTruthy();
      expect(calculator).toEqual(calculator2);
      expect(calculator.constructor.name /* Calculator */).toContain("Calcu");
    });

    it("instantiates unique object", function () {

      expect(calculator).not.toBe(calculator2);
    });

    it("has common operations", function () {

      expect(calculator.add).toBeDefined(); // or not.toBeUndefined();
      expect(calculator.subtract).toBeDefined(); // or not.toBeUndefined();
      expect(calculator.multiply).not.toBeUndefined();
      expect(calculator.divide).not.toBeUndefined();
    });

    it("can overwrite total", function () {

      calculator.total = null;
      expect(calculator.total).toBeNull();
    });

    describe("add()", function () {
      it("should add numbers to total", function () {
        calculator.add(5);

        // expect total to be 5
        expect(calculator.total).toBe(5);
      });

      it("returns total", function () {
        calculator.total = 50;

        expect(calculator.add(20)).toBe(70);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof calculator.total).toMatch("number");
        expect(calculator.total).toBeNumber();
        // asymmetric matchers!
        // not equal in each side!
        expect(calculator.total).toEqual(jasmine.anything());
      });
    });

    describe("subtract()", function () {
      it("should subtract numbers from total", function () {
        calculator.total = 30;
        calculator.subtract(5);

        expect(calculator.total).toBe(25);
      });
    });

    describe("multiply()", function () {
      it("should multiply total by number", function () {
        calculator.total = 100;
        calculator.multiply(2);

        expect(calculator.total).toBe(200);
      });

      it("does not handle NaN", function () {

        calculator.total = 20;
        calculator.multiply("a");

        expect(calculator.total).toBeNaN();
      });

      it("handles divide by zero", function () {

        expect(function () {
          calculator.divide(0);
        }).toThrow();
        expect(function () {
          calculator.divide(0);
        }).toThrowError(Error);
        expect(function () {
          calculator.divide(0);
        }).toThrowError(Error, "Cannot divide by zero");
      });
    });

    describe("deivie()", function () {
      it("should divide total by number", function () {
        calculator.total = 200;
        calculator.divide(2);

        expect(calculator.total).toBe(100);
      });
    });

    describe('get version', function() {
      it('fetches version from external source', async function(done) {
        spyOn(window, 'fetch').and.returnValue(Promise.resolve(
          new Response('{ "version": "0.1"}')
        ));

        const version = await calculator.version;
          expect(version).toBe('0.1');

          done();
      });
    });




  });
});
