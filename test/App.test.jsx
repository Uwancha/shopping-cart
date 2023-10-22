import { describe, it, expect } from 'vitest';

describe('something truthy and falsy', () => {
    test.skip('true to be true', () => {
    expect(true).toBe(true);
  });

  test.skip('false to be false', () => {
    expect(false).toBe(false);
  });
});