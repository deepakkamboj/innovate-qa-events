/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/innovate-qa-events',
  assetPrefix: '/innovate-qa-events',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './next-image-loader.js',
  },
}

export default nextConfig
