const algo = require('./mergeSort');

describe('Utils', () => {
  describe('mergeSort', () => {
    it('should sort the given array.', () => {
      // Arrange
      const input = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
      // Act
      const result = algo.mergeSort(input);
      // Assert
      expect(result).toMatchObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });
  
  describe('_merge', () => {
    it('should take two sorted arrays of numbers and return one sorted array', () => {
      // Arrange
      const a = [3, 5];
      const b = [1, 2];
      // Act
      const result = algo._merge(a, b);
      // Assert
      expect(result).toMatchObject([1, 2, 3, 5]);
    });
  });
});
