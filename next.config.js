/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_API_KEY}`,
      },
      {
        source: "/api/movies/:movieId",
        destination: `https://api.themoviedb.org/3/movie/:movieId?api_key=${process.env.NEXT_API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
