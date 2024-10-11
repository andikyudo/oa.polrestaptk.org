"use client";

import React from "react";
import Image from "next/image"; // Tambahkan import ini

import { useHeader } from "../components/HeaderContext";
import ThemeToggle from "../components/ThemeToggle";

export default function LayoutContent({
	children,
}: {
	children: React.ReactNode;
}) {
	const { showHeader } = useHeader();

	return (
		<div className='min-h-screen flex flex-col bg-white from-blue-100 to-white dark:to-gray-900 '>
			{showHeader && (
				<header className='bg-white dark:bg-zinc-700 text-black p-6 shadow-xl'>
					<div className='container mx-auto flex justify-between items-center'>
						<div className='flex items-center'>
							{" "}
							{/* Wrapper untuk logo dan teks */}
							<Image
								src='/logo_polresta.png' // Ganti dengan path logo Anda
								alt='Foreign Visitor Service Logo'
								width={52} // Sesuaikan ukuran sesuai kebutuhan
								height={52} // Sesuaikan ukuran sesuai kebutuhan
								className='mr-2' // Margin kanan untuk memisahkan logo dari teks
							/>
							<div className='flex-wrap dark:text-white'>
								<h1 className='text-sm font-bold'>
									Kepolisian Resort Kota Pontianak
								</h1>
								<p className='text-xs mb-1'>
									Jl.Gusti Johan Idrus No.1 Pontianak
								</p>
								<div className='border-b-2 border-cyan-950 w-full dark:border-white '></div>
							</div>
						</div>
						<ThemeToggle />
					</div>
				</header>
			)}
			<main className='flex-grow flex items-center justify-center p-4'>
				{children}
			</main>
		</div>
	);
}
