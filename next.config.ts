import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  // For Vercel deployment, use default Next.js behavior (no static export)
  // For GitHub Pages, uncomment the lines below:
  // output: "export",
=======
  // ✅ Enable static export mode
  // output: "export",

  // ✅ Add base path for GitHub Pages
  // Replace 'my-nextjs-app' with your GitHub repository name
>>>>>>> 4c9768cdb368026318ca2e0324f98d394c21b5f0
  // basePath: "/studio",
  // assetPrefix: "/studio/",

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Static export doesn't support the Next.js Image Optimization API,
    // so we must use unoptimized images or external URLs.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
