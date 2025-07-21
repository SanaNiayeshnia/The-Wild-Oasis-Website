/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["mshaafmnyquwisotlwxx.supabase.co", "lh3.googleusercontent.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
