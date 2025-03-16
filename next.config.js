/** @type {import('next').NextConfig} */
const nextConfig = {
  // We're removing the standalone output mode as it's causing issues
  // output: 'standalone',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Add experimental features to improve compatibility
  experimental: {
    // This helps with Docker builds
    esmExternals: 'loose',
  },
};

module.exports = nextConfig; 