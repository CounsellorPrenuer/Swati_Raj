/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true'
const repoName = 'Swati_Raj'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
    ],
  },
  basePath: isGitHubPages ? `/${repoName}` : '',
  assetPrefix: isGitHubPages ? `/${repoName}/` : '',
  reactStrictMode: true,
};

module.exports = nextConfig;
