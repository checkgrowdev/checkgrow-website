import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* self-contained server bundle for the Docker deploy */
  output: "standalone",
};

export default nextConfig;
