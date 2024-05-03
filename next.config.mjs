/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bootcamp-project-api.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/noticeList',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
