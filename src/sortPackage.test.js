const sortPackage = require('./sortPackage');

describe('Package sorting tests', () => {
  test('Standard package (not bulky or heavy)', () => {
    expect(sortPackage(50, 40, 30, 10)).toBe("STANDARD");
  });

  test('Bulky package (volume >= 1,000,000)', () => {
    expect(sortPackage(200, 100, 50, 10)).toBe("SPECIAL");
  });

  test('Bulky package (dimension >= 150)', () => {
    expect(sortPackage(151, 40, 30, 10)).toBe("SPECIAL");
  });

  test('Heavy package (mass >= 20)', () => {
    expect(sortPackage(50, 40, 30, 25)).toBe("SPECIAL");
  });

  test('Rejected package (both heavy and bulky)', () => {
    expect(sortPackage(200, 200, 50, 25)).toBe("REJECTED");
  });

  test('Edge case: exactly at bulky and heavy thresholds', () => {
    expect(sortPackage(100, 100, 100, 20)).toBe("REJECTED"); // 1,000,000 volume and 20 mass
  });

  test('Edge case: volume just below bulky threshold', () => {
    expect(sortPackage(100, 100, 99, 19)).toBe("STANDARD"); // 990,000 volume
  });
});
