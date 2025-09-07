import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/bento-grid",
  assetPrefix: "/bento-grid/",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
