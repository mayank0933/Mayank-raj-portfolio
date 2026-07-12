/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  // Uncomment the two lines below only if deploying to GitHub Pages
  // (static export). See README "Deploy to GitHub Pages" section.
  // output: 'export',
  // images: { unoptimized: true },
};

module.exports = nextConfig;
