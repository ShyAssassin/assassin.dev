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
}

module.exports = nextConfig