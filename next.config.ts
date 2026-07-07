import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Note: do NOT set crossOrigin: 'use-credentials'. It forces all _next/static
  // script chunks to load in credentials-mode CORS, which ngrok (and most CDNs
  // without Access-Control-Allow-Credentials) reject — silently blocking every
  // client bundle and breaking hydration (theme/language toggles, framer-motion
  // reveal sections). The default 'anonymous' behavior is correct.
};

export default nextConfig;
