const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "admin.wemark.pro",
                pathname: "/media/**",
            },
        ],
    },
};

export default nextConfig;