import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/maternity-obstetrics", destination: "/maternity", permanent: true },
      { source: "/mortuary-pathology", destination: "/mortuary", permanent: true },
      { source: "/dental-clinic", destination: "/dental", permanent: true },
      { source: "/clinical-emr", destination: "/consultation", permanent: true },
      { source: "/pharmacy-pos", destination: "/pharmacy/otc-sales", permanent: true },
      { source: "/billing-desk", destination: "/billing", permanent: true },
    ];
  },
  images: {
    remotePatterns: [{
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      }],
  },
  /* config options here */
};

export default nextConfig;
