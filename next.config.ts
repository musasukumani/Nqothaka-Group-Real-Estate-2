import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  distDir: process.env.NEXT_OUTPUT_DIR ?? ".next",
};

export default nextConfig;
