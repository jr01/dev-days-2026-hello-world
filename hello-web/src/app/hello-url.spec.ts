import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { helloUrl } from './hello-url';

describe('helloUrl', () => {
  // Property test: fast-check generates many random names and checks that
  // the name always survives the trip through the query string unchanged.
  it('round-trips any non-empty name through the query string', () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1 }), (name) => {
        const url = new URL(helloUrl(name), 'http://localhost');
        expect(url.pathname).toBe('/api/hello');
        expect(url.searchParams.get('name')).toBe(name);
      }),
    );
  });
});
