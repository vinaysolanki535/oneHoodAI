/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
    };
  },
  images: {
    domains: [
      "oaidalleapiprodscus.blob.core.windows.net",
      "res.cloudinary.com",
    ],
  },
};

export default nextConfig;
