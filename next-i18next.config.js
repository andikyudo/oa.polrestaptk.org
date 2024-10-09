const path = require("path");

module.exports = {
	i18n: {
		defaultLocale: "en",
		locales: ["en", "ko", "id", "zh", "ja"],
	},
	localePath:
		typeof window === "undefined"
			? path.resolve("./public/locales")
			: "/locales",
};
