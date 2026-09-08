import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/services", destination: "/#services", permanent: false },
      { source: "/services/details", destination: "/#services", permanent: false },
      { source: "/works", destination: "/#works", permanent: false },
      { source: "/works/details", destination: "/#works", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
      { source: "/blog", destination: "/", permanent: false },
      { source: "/blog/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
