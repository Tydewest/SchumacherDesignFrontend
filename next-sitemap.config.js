/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.tydewest.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    // Ensure '/contact' is not here.
    // e.g., '/admin' or any other paths you want to hide.
  ],
};