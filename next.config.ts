import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "iimydr2b8o.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "www.ui.tripled.work",
      },
    ],
  },
};

export default nextConfig;
