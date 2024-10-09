"use client";

import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function TermsAndConditions() {
	const { t } = useTranslation("common");

	return (
		<div className='min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-blue-900 dark:to-gray-900 p-4'>
			<main className='container mx-auto max-w-2xl'>
				<div className='bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden'>
					<div className='bg-blue-600 dark:bg-blue-800 p-6 text-white'>
						<h1 className='text-3xl font-bold text-center'>
							{t("terms_and_conditions")}
						</h1>
					</div>
					<div className='p-6'>
						<h2 className='text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200'>
							{t("foreign_visitor_regulations")}
						</h2>
						<div className='prose dark:prose-invert mb-6'>
							<p>{t("terms_content")}</p>
						</div>
						<div className='flex flex-col space-y-4'>
							<Link
								href='/form'
								className='w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
							>
								{t("proceed_to_registration")}
							</Link>
							<Link
								href='/'
								className='w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
							>
								{t("back_to_home")}
							</Link>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
