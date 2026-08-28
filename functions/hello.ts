/**
 * GET /<mount>/api/hello
 *
 * Smoke test for the Cloud Functions pipeline: build -> deploy -> reachable.
 *
 * Deliberately a raw FetchableFunction rather than declareFunction(): static
 * detection requires that an app have no root package.json, so a static app can
 * install no dependencies and therefore cannot import the wrapper. The raw
 * `{ config, fetch }` shape is a supported authoring style for exactly this
 * case; it trades away the typed context.
 *
 * The framework fixtures (next, astro7) use declareFunction() and are the
 * reference for typed authoring — do not "fix" this file to match them.
 */
export default {
  config: { method: "GET" },
  async fetch() {
    return Response.json({
      message: "hello from webflow cloud functions",
      app: "static",
      route: "/api/hello",
    });
  },
};
