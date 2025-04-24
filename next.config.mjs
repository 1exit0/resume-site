// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // این خط رو حذف یا کامنت کن 👇
  // output: 'export',

  images: {
    // این خط هم نیاز نیست مگر اینکه بخوای دستی غیرفعال کنی
    unoptimized: false,
  },
};

export default nextConfig;
