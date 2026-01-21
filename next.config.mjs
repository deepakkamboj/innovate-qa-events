/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // If your repo name is not the root domain, uncomment and set basePath
  basePath: '/innovate-qa-events',
}

export default nextConfig
