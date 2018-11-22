jest.mock("isomorphic-fetch", () => {
  return function mockFetch(url) {
    return Promise.resolve({
      json() {
        return Promise.resolve(
          Array.from({ length: 5 }, (_, i) => ({ key: `Image ${i + 1}` }))
        );
      }
    });
  };
});

const getSomeImages = require("../sample-5-finished");

describe("Getting Some Images", () => {
  it("should return the amount of images requested from the callback", () => {
    // Arrange
    const callback = jest.fn();

    // Act
    return getSomeImages(2, callback).then(() => {
      // Assert
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith([
        {
          key: 'Image 1'
        },
        {
          key: 'Image 2'
        },
      ])
    });
  });
});
