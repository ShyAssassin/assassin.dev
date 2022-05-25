/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: false,
    distDir: '.next',
    devIndicators: {
        buildActivity: true,
        buildActivityPosition: 'bottom-right',
    },
    images: {
        domains: [
            'i.scdn.co' // Spotify Track/Album Art
        ]
    }
}

module.exports = nextConfig