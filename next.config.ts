import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Configure page extensions to include MDX
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],

  // Optional: Enable static export if you want to deploy as static site
  // output: 'export',
  // trailingSlash: true,
  // images: {
  //   unoptimized: true
  // }
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

// Wrap MDX and Next.js config
export default withMDX(nextConfig);
