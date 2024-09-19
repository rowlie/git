/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: 'cdn-dynmedia-1.microsoft.com',
        }],
    },
};

export default nextConfig;
