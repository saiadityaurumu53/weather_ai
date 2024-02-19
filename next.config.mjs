/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        //appDir: true,
        serverComponentsExternalPackages: ['@tremor/react'],
    }
};

export default nextConfig;
