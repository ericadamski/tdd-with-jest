const add = require("../sample-3.finished");

describe("Add", () => {
  it("should add two numbers", () => {
    // Arrange

    // Act
    const result = add(1, 2);

    // Assert
    expect(result).toBe(3);
  });

  it("should throw an error when attempting to add non-numbers", () => {
    // Arrange

    // Act
    // This is wrapped in a function
    // so that it doesn't crash when an error is thrown
    const boolResult = () => add(true, false);
    const stringResult = () => add("hello", "world");
    const arrayResult = () => add([0], [1, 2]);
    const objectResult = () => add({ value: 1 }, 1);
    const undefinedResult = () => add(undefined, 1);
    const nullResult = () => add(null, 1);
    const functionResult = () =>
      add(function() {
        return 1;
      }, 1);

    // Assert
    expect(boolResult).toThrowErrorMatchingSnapshot();
    expect(stringResult).toThrowErrorMatchingSnapshot();
    expect(arrayResult).toThrowErrorMatchingSnapshot();
    expect(objectResult).toThrowErrorMatchingSnapshot();
    expect(undefinedResult).toThrowErrorMatchingSnapshot();
    expect(nullResult).toThrowErrorMatchingSnapshot();
    expect(functionResult).toThrowErrorMatchingSnapshot();
  });
});
