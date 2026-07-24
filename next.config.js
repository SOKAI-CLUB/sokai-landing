/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  output: "export",
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
