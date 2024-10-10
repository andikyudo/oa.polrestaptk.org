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
		{ code: "kra", name: "한국어", flag: "/flags/kra.png" },
		{ code: "ara", name: "العربية", flag: "/flags/ara.png" },
		{ code: "thai", name: "ไทย", flag: "/flags/thai.png" },
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
		setLanguage(code as "en" | "id" | "zh" | "kra" | "ara" | "thai");
		setIsOpen(false);
	};

	return (
		<>
			<div
				className='w-full p-2 pl-4 border border-gray-300 rounded-md bg-white text-black cursor-pointer flex items-center justify-between'
				onClick={() => setIsOpen(true)}
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
				<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
					<div className='bg-white rounded-lg p-4 max-w-sm w-full'>
						<h2 className='text-lg font-bold mb-4 text-black'>
							Select Language
						</h2>
						{languages.map((lang) => (
							<div
								key={lang.code}
								className='flex items-center p-2 pb-4 hover:bg-gray-100 text-black cursor-pointer'
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
						<button
							className='mt-4 w-full bg-blue-500 text-white p-2 rounded'
							onClick={() => setIsOpen(false)}
						>
							Close
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default LanguageSelector;
