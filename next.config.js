/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['images.unsplash.com', 'fakestoreapi.com'],
	},
	async redirects() {
		return [
			{
				source: '/shop/products',
				destination: '/shop',
				permanent: true,
			},
			{
				source: '/shop/category',
				destination: '/shop',
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
