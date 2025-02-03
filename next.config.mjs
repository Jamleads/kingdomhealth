/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
      reactStrictMode: true,
  images: {
    domains: ['ap-south-1.graphassets.com'],
  },
    //   images: {
    //     remotePatterns: [ 
    //           {
    //           protocol: "https",
    //           hostname: "media.graphassets.com"
    //         }
    //       ],
    //     },
};

export default nextConfig;
