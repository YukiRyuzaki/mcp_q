const { greet } = require('./index');

describe('greet function', () => {
  test('should return Hello, World! by default', () => {
    expect(greet()).toBe('Hello, World!');
  });

  test('should greet with custom name', () => {
    expect(greet('CircleCI')).toBe('Hello, CircleCI!');
  });

  test('should handle empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });

  test('should handle special characters', () => {
    expect(greet('Test-User_123')).toBe('Hello, Test-User_123!');
  });

  test('should handle null input', () => {
    expect(greet(null)).toBe('Hello, null!');
  });

  test('should handle undefined input', () => {
    expect(greet(undefined)).toBe('Hello, undefined!');
  });

  test('should handle numeric input', () => {
    expect(greet(123)).toBe('Hello, 123!');
  });

  test('should handle boolean input', () => {
    expect(greet(true)).toBe('Hello, true!');
    expect(greet(false)).toBe('Hello, false!');
  });

  test('should handle whitespace input', () => {
    expect(greet('   ')).toBe('Hello,    !');
    expect(greet('\t')).toBe('Hello, \t!');
    expect(greet('\n')).toBe('Hello, \n!');
  });

  test('should handle long strings', () => {
    const longName = 'A'.repeat(100);
    expect(greet(longName)).toBe(`Hello, ${longName}!`);
  });

  test('should handle unicode characters', () => {
    expect(greet('こんにちは')).toBe('Hello, こんにちは!');
    expect(greet('🎉')).toBe('Hello, 🎉!');
  });

  test('should be consistent across multiple calls', () => {
    const name = 'Consistent';
    const expected = 'Hello, Consistent!';
    
    for (let i = 0; i < 10; i++) {
      expect(greet(name)).toBe(expected);
    }
  });
});