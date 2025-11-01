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
    },
    async rewrites() {
        return [
            {
                source: "/.well-known/matrix/client",
                destination: "https://matrix.assassin.dev/.well-known/matrix/client"
            },
            {
                source: "/.well-known/matrix/server",
                destination: "https://matrix.assassin.dev/.well-known/matrix/server"
            },
            {
                source: "/.well-known/:path*",
                destination: "/api/well-known/:path*"
            }
        ];
    }
};

module.exports = nextConfig;
