"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "../components/LanguageSelector";

interface Country {
	code: string;
	name: string;
}

const countries: Country[] = [
	{ code: "ID", name: "Indonesia" },
	{ code: "GB", name: "United Kingdom" },
	{ code: "KR", name: "South Korea" },
	{ code: "CN", name: "China" },
	{ code: "JP", name: "Japan" },
];

export default function Home() {
	const [selectedLanguage, setSelectedLanguage] = useState<string>("GB");

	return (
		<div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4'>
			<main className='w-full max-w-md'>
				<div className='mb-8'>
					<Image
						src='/logo.png'
						alt='Foreign Visitor Service Logo'
						width={120}
						height={120}
						className='mx-auto'
					/>
				</div>
				<h1 className='text-2xl md:text-3xl font-bold text-blue-800 mb-8 text-center'>
					Welcome to Foreign Visitor Service
				</h1>
				<div className='bg-white shadow-md rounded-lg p-6'>
					<h2 className='text-lg md:text-xl font-semibold mb-4 text-gray-700 text-center'>
						Select Your Language and Nationality
					</h2>
					<LanguageSelector
						countries={countries}
						selectedLanguage={selectedLanguage}
						onSelectLanguage={setSelectedLanguage}
					/>
					<Link
						href='/terms'
						className='mt-6 block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300'
					>
						Continue to Terms and Conditions
					</Link>
				</div>
			</main>
		</div>
	);
}
