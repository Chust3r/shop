/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
		domains: ['images.unsplash.com', 'fakestoreapi.com'],
	},
}

module.exports = nextConfig
