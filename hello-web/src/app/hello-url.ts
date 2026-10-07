/** Builds the URL for GET /api/hello, with an optional name query parameter. */
export function helloUrl(name?: string): string {
  return name ? `/api/hello?name=${encodeURIComponent(name)}` : '/api/hello';
}
