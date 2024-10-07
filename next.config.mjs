/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  redirects: async () => {
    return [
      {
        source: "/default/:path*",
        destination: "/r/styles/default/:path*.json",
        permanent: true,
      },
      {
        source: "/new-york/:path*",
        destination: "/r/styles/new-york/:path*.json",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
