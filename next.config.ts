import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Use Biome instead of ESLint during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
