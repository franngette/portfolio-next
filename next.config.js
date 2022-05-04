/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@forward "styles/mixins.scss"; @forward "styles/colors.scss";`,
  },
}

module.exports = nextConfig
