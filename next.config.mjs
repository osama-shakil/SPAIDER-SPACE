/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "assets.skool.com",
      "www.loom.com",
      "www.youtube.com",
      "youtu.be",
      "vimeo.com",
      "player.vimeo.com",
      "fast.wistia.com",
      "wistia.com",
      "wi.st",
     "cdn.pixabay.com",
     "pixabay.com"
    ],
  },
  webpack: (config, { isServer }) => {
    // Add raw-loader rule
    config.module.rules.push({
      test: /\.html$/,
      use: [
        { loader: 'raw-loader' }
      ]
    });

    return config;
  },
};

export default nextConfig;
