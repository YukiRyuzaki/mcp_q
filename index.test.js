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

  // Flaky tests for testing purposes
  test('flaky test - random failure 5%', () => {
    const shouldFail = Math.random() < 0.05; // 5% chance of failure
    if (shouldFail) {
      throw new Error('Random failure for flaky test demonstration');
    }
    expect(greet('Flaky')).toBe('Hello, Flaky!');
  });

  test('flaky test - random failure 10%', () => {
    const shouldFail = Math.random() < 0.1; // 10% chance of failure
    if (shouldFail) {
      throw new Error('Random failure for flaky test demonstration');
    }
    expect(greet('Flaky')).toBe('Hello, Flaky!');
  });

  test('flaky test - random failure 15%', () => {
    const shouldFail = Math.random() < 0.15; // 15% chance of failure
    if (shouldFail) {
      throw new Error('Random failure for flaky test demonstration');
    }
    expect(greet('Flaky')).toBe('Hello, Flaky!');
  });

  // Timing dependent tests
  test('flaky test - timing dependent (divisible by 7)', () => {
    const now = new Date().getSeconds();
    // Fails when seconds are divisible by 7
    if (now % 7 === 0) {
      expect(true).toBe(false);
    }
    expect(greet('Timer7')).toBe('Hello, Timer7!');
  });

  test('flaky test - timing dependent (divisible by 11)', () => {
    const now = new Date().getSeconds();
    // Fails when seconds are divisible by 11
    if (now % 11 === 0) {
      expect(true).toBe(false);
    }
    expect(greet('Timer11')).toBe('Hello, Timer11!');
  });

  test('flaky test - timing dependent (divisible by 13)', () => {
    const now = new Date().getSeconds();
    // Fails when seconds are divisible by 13
    if (now % 13 === 0) {
      expect(true).toBe(false);
    }
    expect(greet('Timer13')).toBe('Hello, Timer13!');
  });

  // Slow tests with variable execution times (10-40 seconds total)
  test('slow test - variable delay 3-8 seconds', async () => {
    const delay = 3000 + Math.random() * 5000; // 3-8 seconds
    await new Promise(resolve => setTimeout(resolve, delay));
    expect(greet('SlowVariable1')).toBe('Hello, SlowVariable1!');
  }, 10000); // 10 second timeout

  test('slow test - computation heavy with random iterations', () => {
    const iterations = 500000 + Math.floor(Math.random() * 1000000); // 500k-1.5M iterations
    let result = 0;
    for (let i = 0; i < iterations; i++) {
      result += Math.sqrt(i) * Math.sin(i / 1000) + Math.cos(i / 2000);
    }
    expect(greet('SlowComputation')).toBe('Hello, SlowComputation!');
    expect(result).toBeDefined();
  }, 15000); // 15 second timeout

  test('slow test - mixed delay and computation', async () => {
    // Variable delay first
    const delay = 2000 + Math.random() * 4000; // 2-6 seconds
    await new Promise(resolve => setTimeout(resolve, delay));
    
    // Then variable computation
    const iterations = 200000 + Math.floor(Math.random() * 600000); // 200k-800k iterations
    let result = 0;
    for (let i = 0; i < iterations; i++) {
      result += Math.cos(i / 500) + Math.log(i + 1) + Math.tan(i / 3000);
    }
    
    expect(greet('SlowMixed')).toBe('Hello, SlowMixed!');
    expect(result).toBeDefined();
  }, 20000); // 20 second timeout

  test('slow test - heavy computation with nested loops', () => {
    const outerLoop = 500 + Math.floor(Math.random() * 1000); // 500-1500
    const innerLoop = 200 + Math.floor(Math.random() * 300); // 200-500
    let result = 0;
    
    for (let i = 0; i < outerLoop; i++) {
      for (let j = 0; j < innerLoop; j++) {
        result += Math.sqrt(i * j + 1) * Math.sin((i + j) / 100);
      }
    }
    
    expect(greet('SlowNested')).toBe('Hello, SlowNested!');
    expect(result).toBeDefined();
  }, 10000); // 10 second timeout

  test('slow test - multiple async operations', async () => {
    const operations = 3 + Math.floor(Math.random() * 4); // 3-6 operations
    
    for (let i = 0; i < operations; i++) {
      const delay = 1000 + Math.random() * 2000; // 1-3 seconds each
      await new Promise(resolve => setTimeout(resolve, delay));
      
      // Some computation between delays
      const iterations = 10000 + Math.floor(Math.random() * 20000);
      let result = 0;
      for (let j = 0; j < iterations; j++) {
        result += Math.pow(j, 0.5) + Math.log10(j + 1);
      }
    }
    
    expect(greet('SlowAsync')).toBe('Hello, SlowAsync!');
  }, 25000); // 25 second timeout
});