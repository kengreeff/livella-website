/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
          },
        ],
      },
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
