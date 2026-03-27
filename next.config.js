/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    '192.168.1.53',
    '*.trycloudflare.com',
    'mails-claimed-sharon-bizrate.trycloudflare.com',
  ],
  outputFileTracingRoot: __dirname,
};

module.exports = nextConfig;
