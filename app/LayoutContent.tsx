"use client";

import React from "react";
import { useLanguage } from "../components/LanguageContext";
import ThemeToggle from "../components/ThemeToggle";

export default function LayoutContent({
	children,
}: {
	children: React.ReactNode;
}) {
	const { t } = useLanguage();

	return (
		<div className='min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
			<header className='bg-blue-800 dark:bg-blue-900 text-white p-4'>
				<div className='container mx-auto flex justify-between items-center'>
					<h1 className='text-2xl font-bold'>{t("foreign_visitor_service")}</h1>
					<ThemeToggle />
				</div>
			</header>
			<main className='container mx-auto py-4'>{children}</main>
			<footer className='bg-gray-200 dark:bg-gray-800 text-center p-4 mt-8'>
				<p>{t("copyright_notice")}</p>
			</footer>
		</div>
	);
}
