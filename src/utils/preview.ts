/**
 * Helper to determine whether the app is running in the Google AI Studio preview environment
 * or on the final deployed website (such as Vercel or any production host).
 *
 * In the AI Studio preview:
 * - Hostnames match `*.run.app` or `localhost` / `127.0.0.1` during local development.
 * - `import.meta.env.DEV` is true.
 *
 * On the final deployed website (e.g. `*.vercel.app`, custom domain, etc. in production):
 * - It will not be in preview mode unless explicitly forced via query param `?preview=true` or `?edit=true`.
 */
export function isPreviewEnvironment(): boolean {
  if (typeof window === 'undefined') return false;

  // Allow explicit query param override for testing/admin access if needed
  const params = new URLSearchParams(window.location.search);
  if (params.get('edit') === 'true' || params.get('preview') === 'true') {
    return true;
  }
  if (params.get('production') === 'true' || params.get('readonly') === 'true') {
    return false;
  }

  const hostname = window.location.hostname;

  // AI Studio preview environment domains
  if (hostname.includes('.run.app') || hostname === 'localhost' || hostname === '127.0.0.1') {
    return true;
  }

  // If built and deployed anywhere else (e.g. Vercel, Netlify, custom domain), it is the final deployed website
  return false;
}
