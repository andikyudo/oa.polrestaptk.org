"use client";

import { useLanguage } from "../components/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "../components/LanguageSelector";

export default function Home() {
	const { t } = useLanguage();

	return (
		<div className='min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-blue-900 dark:to-gray-900 flex flex-col items-center justify-center p-4'>
			<main className='w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl rounded-lg'>
				<div className='bg-white dark:bg-blue-800 p-6 text-black text-center rounded-t-lg'>
					<div className='flex justify-between items-center space-x-6 mb-4'>
						<Image
							src='/garuda.png'
							alt='Foreign Visitor Service Logo'
							width={100}
							height={100}
						/>
						<Image
							src='/logo_polresta.png'
							alt='Second Icon'
							width={80}
							height={80}
						/>
					</div>
					<h1 className='text-lg font-bold mb-2'>{t("welcome")}</h1>
					<p className='text-blue-200'>{t("select_language")}</p>
				</div>
				<div className='p-6'>
					<div className='relative z-10'>
						<LanguageSelector />
					</div>
					<Link
						href='/terms'
						className='mt-6 block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
					>
						{t("continue")}
					</Link>
				</div>
			</main>
		</div>
	);
}
