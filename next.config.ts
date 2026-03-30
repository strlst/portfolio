import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH to your repo name when deploying to GitHub Pages.
// Leave unset (or empty) for a custom domain / root deployment.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // required for <Image> with static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
