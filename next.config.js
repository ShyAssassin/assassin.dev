/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: false,
    distDir: ".next",
    devIndicators: {
        buildActivity: true,
        buildActivityPosition: "bottom-right"
    },
    images: {
        domains: [
            "i.scdn.co" // Spotify Track/Album Art
        ]
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"]
        });
        return config;
    }
};

module.exports = nextConfig;
