import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        hostname: 'flowbite.s3.amazonaws.com'
      }
    ]
  }
};

export default nextConfig;
