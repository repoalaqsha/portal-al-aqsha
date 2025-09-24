import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // izinkan Cloudinary
  },
};

export default nextConfig;
