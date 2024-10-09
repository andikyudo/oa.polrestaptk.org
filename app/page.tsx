"use client";

import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "../components/LanguageSelector";

export default function Home() {
	const { t } = useTranslation("common");

	return (
		<div className='min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-blue-900 dark:to-gray-900 flex flex-col items-center justify-center p-4'>
			<main className='w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden'>
				<div className='bg-blue-600 dark:bg-blue-800 p-6 text-white text-center'>
					<Image
						src='/logo.png'
						alt='Foreign Visitor Service Logo'
						width={100}
						height={100}
						className='mx-auto mb-4'
					/>
					<h1 className='text-3xl font-bold mb-2'>{t("welcome")}</h1>
					<p className='text-blue-200'>{t("select_language")}</p>
				</div>
				<div className='p-6'>
					<LanguageSelector />
					<Link
						href='/terms'
						className='mt-6 block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
					>
						{t("continue_to_terms")}
					</Link>
				</div>
			</main>
		</div>
	);
}
