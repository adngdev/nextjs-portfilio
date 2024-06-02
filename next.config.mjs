/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'adngdev-bucket.s3.ap-southeast-2.amazonaws.com',
                port: '',
                pathname: '/portfolio/**',
            },
        ],
    },
};

export default nextConfig;
