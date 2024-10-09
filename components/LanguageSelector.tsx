"use client";

import React from "react";
import { useLanguage } from "../components/LanguageContext";

const LanguageSelector: React.FC = () => {
	const { language, setLanguage } = useLanguage();

	return (
		<select
			value={language}
			onChange={(e) => setLanguage(e.target.value as "en" | "id" | "zh")}
			className='w-full p-2 border border-gray-300 rounded-md'
		>
			<option value='en'>English</option>
			<option value='id'>Bahasa Indonesia</option>
			<option value='zh'>中文</option>
		</select>
	);
};

export default LanguageSelector;
