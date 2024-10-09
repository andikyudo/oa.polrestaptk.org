const i18nConfig = require("./next-i18next.config.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: i18nConfig.i18n,
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "flagcdn.com",
				port: "",
				pathname: "/w40/**",
			},
		],
	},
};

module.exports = nextConfig;
