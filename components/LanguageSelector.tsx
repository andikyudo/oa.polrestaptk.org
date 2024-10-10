import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../components/LanguageContext";
import Image from "next/image";

const LanguageSelector: React.FC = () => {
	const { language, setLanguage } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const languages = [
		{ code: "en", name: "English", flag: "/flags/en.png" },
		{ code: "id", name: "Bahasa Indonesia", flag: "/flags/id.png" },
		{ code: "zh", name: "中文", flag: "/flags/zh.png" },
	];

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleLanguageChange = (code: string) => {
		setLanguage(code as "en" | "id" | "zh");
		setIsOpen(false);
	};

	return (
		<div className='relative' ref={dropdownRef}>
			<div
				className='w-full p-2 pl-10 border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white cursor-pointer flex items-center justify-between'
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className='flex items-center'>
					<Image
						src={languages.find((lang) => lang.code === language)?.flag || ""}
						alt={`${language} flag`}
						width={20}
						height={15}
						className='mr-2'
					/>
					{languages.find((lang) => lang.code === language)?.name}
				</div>
				<svg
					className='w-4 h-4 text-gray-400'
					viewBox='0 0 20 20'
					fill='currentColor'
				>
					<path
						fillRule='evenodd'
						d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
						clipRule='evenodd'
					/>
				</svg>
			</div>
			{isOpen && (
				<div className='absolute top-full left-0 w-full bg-white dark:bg-gray-800 border border-gray-300 rounded-md mt-1 shadow-lg z-50 overflow-hidden'>
					{languages.map((lang) => (
						<div
							key={lang.code}
							className='flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'
							onClick={() => handleLanguageChange(lang.code)}
						>
							<Image
								src={lang.flag}
								alt={`${lang.name} flag`}
								width={20}
								height={15}
								className='mr-2'
							/>
							{lang.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default LanguageSelector;
