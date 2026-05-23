import type { NextConfig } from "next";

const strapiUrl = process.env.STRAPI_URL ?? "http://localhost:1337";
let strapiHostname = "localhost";
try {
  strapiHostname = new URL(strapiUrl).hostname;
} catch {
  // keep default
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: strapiHostname,
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: strapiHostname,
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "shop.goodbeef.pl",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
