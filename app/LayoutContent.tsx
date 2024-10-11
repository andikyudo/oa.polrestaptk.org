"use client";

import React from "react";
import Image from "next/image";
import { useHeader } from "../components/HeaderContext";
import ThemeToggle from "../components/ThemeToggle";
import RunningAnnouncement from "../components/RunningAnnouncement";

export default function LayoutContent({
	children,
}: {
	children: React.ReactNode;
}) {
	const { showHeader } = useHeader();

	// You can replace this with actual announcement text, possibly from a context or prop
	const announcementText =
		"Welcome to Foreign Visitor Service. Please ensure all your documents are up to date.";

	return (
		<div className='min-h-screen flex flex-col bg-white from-blue-100 to-white dark:to-gray-900'>
			{showHeader && (
				<header className='bg-white dark:bg-zinc-600 text-black dark:text-white shadow-xl'>
					<div className='container mx-auto p-6'>
						<div className='flex justify-between items-center'>
							<div className='flex items-center'>
								<Image
									src='/logo_polresta.png'
									alt='Foreign Visitor Service Logo'
									width={52}
									height={52}
									className='mr-2'
								/>
								<div className='flex-wrap'>
									<h1 className='text-md font-bold'>
										Kepolisian Resor Kota Pontianak
									</h1>
									<p className='text-xs mb-1'>
										Jl.Gusti Johan Idrus No.1 Pontianak
									</p>
									<div className='border-b-2 border-cyan-950 w-full dark:border-white'></div>
								</div>
							</div>
							<ThemeToggle />
						</div>
					</div>
					<RunningAnnouncement text={announcementText} />
				</header>
			)}
			<main className='flex-grow flex items-center justify-center p-2'>
				{children}
			</main>
		</div>
	);
}
