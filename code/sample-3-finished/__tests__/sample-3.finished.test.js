const add = require("../sample-3.finished");

describe("Add", () => {
  it("should add two number", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("should throw an error when attempting to add booleans", () => {
    expect(() => add(true, false)).toThrowErrorMatchingSnapshot();
  });
});
