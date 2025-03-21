/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "via.placeholder.com",
      "substackcdn.com",
      "substack-post-media.s3.amazonaws.com",
    ],
  },
};

export default nextConfig;
