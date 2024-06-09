/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.divine-pride.net",
        port: "",
        pathname: "/images/mobs/png/**",
      },
    ],
  },
};

export default nextConfig;
