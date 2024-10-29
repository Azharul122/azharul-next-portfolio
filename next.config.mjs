/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "azharul-islam-b901c.web.app",
          },
        ],
      },
};

export default nextConfig;
