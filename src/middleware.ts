import type { MiddlewareHandler } from "astro";

// ALLOWED IPs - replace with your actual IP(s)
const ALLOWED_IPS = new Set([
  "YOUR_IP_ADDRESS_HERE", // e.g., "203.0.113.42"
  // Add more IPs as needed
  // "198.51.100.1",
  // "203.0.113.50",
]);

const handler: MiddlewareHandler = async (context, next) => {
  // Request.cf is a Cloudflare Pages specific property
  // @ts-ignore
  const clientIp = context.request.cf?.clientAddr;

  // Allow access if IP is in allowlist
  if (clientIp && ALLOWED_IPS.has(clientIp)) {
    return await next();
  }

  // In development/local environment, allow all requests
  if (import.meta.env.DEV) {
    return await next();
  }

  // Return 403 Forbidden for unauthorized
  return new Response("Access Denied", { status: 403 });
};

export const onRequest = handler;