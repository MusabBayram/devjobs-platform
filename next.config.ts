import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // 📛 önemli
  images: {
    unoptimized: true, // ❗ bu satır hatayı çözer
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;