/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * next15 has opted out of caching of pages in between navigation,
   * so we have to opt in. Socialite app can use caching as the UI
   * will have components that won't change much and the UI that
   * needs to be updated will be handled by react query. The client
   * side router will cache the page for 30 seconds
   */
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
};

export default nextConfig;
