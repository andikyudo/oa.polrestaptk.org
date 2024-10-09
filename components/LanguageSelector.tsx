"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "next-i18next";

const languages = [
	{ code: "en", name: "English" },
	{ code: "ko", name: "한국어" },
	{ code: "id", name: "Bahasa Indonesia" },
	{ code: "zh", name: "中文" },
	{ code: "ja", name: "日本語" },
];

export default function LanguageSelector() {
	const router = useRouter();
	const pathname = usePathname();
	const { i18n } = useTranslation();

	const changeLanguage = (lang: string) => {
		// Assuming you're using the app directory structure
		router.push(pathname, { locale: lang });
	};

	return (
		<select
			onChange={(e) => changeLanguage(e.target.value)}
			value={i18n.language}
			className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
		>
			{languages.map((lang) => (
				<option key={lang.code} value={lang.code}>
					{lang.name}
				</option>
			))}
		</select>
	);
}
