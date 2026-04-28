import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },
  allowedDevOrigins: ["172.22.97.220"],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
