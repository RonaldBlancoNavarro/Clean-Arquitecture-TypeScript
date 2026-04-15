import { describe, it, expect } from 'vitest';
import { checkHealth } from '../../src/shared/health';

//comprobar que el sistema esta vivo, es decir, que la función checkHealth devuelve true
describe('Health', () => {
  it('should return true for health check', () => {
    expect(checkHealth()).toBe(true);
  });
});