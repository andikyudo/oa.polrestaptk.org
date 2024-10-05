import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Foreign Visitor Service",
	description: "Public service app for foreign visitors",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<header className='bg-blue-800 text-white p-4'>
					<div className='container mx-auto flex justify-between items-center'>
						<h1 className='text-2xl font-bold'>Foreign Visitor Service</h1>
						{/* Add navigation menu items here if needed */}
					</div>
				</header>
				{children}
				<footer className='bg-gray-200 text-center p-4 mt-8'>
					<p>&copy; 2024 Foreign Visitor Service. All rights reserved.</p>
				</footer>
			</body>
		</html>
	);
}
