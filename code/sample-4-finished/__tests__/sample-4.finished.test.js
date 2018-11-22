const multiply = require("../sample-4.finished");

describe("Multiply", () => {
  it("should multiply two numbers", () => {
    // Arrange

    // Act
    const result = multiply(1, 2);

    // Assert
    expect(result).toBe(2);
  });

  it("should throw an error when attempting to multiply non-numbers", () => {
    // Arrange

    // Act
    const boolResult = () => multiply(true, false);
    const stringResult = () => multiply("hello", "world");
    const arrayResult = () => multiply([0], [1, 2]);
    const objectResult = () => multiply({ value: 1 }, 1);
    const undefinedResult = () => multiply(undefined, 1);
    const nullResult = () => multiply(null, 1);
    const functionResult = () =>
      multiply(function() {
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
