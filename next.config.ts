import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // /packages was renamed to /ceramic-coating — permanent redirect so
      // existing bookmarks, external links and any already-indexed search
      // results don't break.
      {
        source: "/packages",
        destination: "/ceramic-coating",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
