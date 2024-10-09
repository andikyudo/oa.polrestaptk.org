import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./providers";
import { LanguageProvider } from "../components/LanguageProvider";
import ThemeToggle from "../components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Foreign Visitor Service",
	description: "Public service app for foreign visitors",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					<LanguageProvider>
						<div className='min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
							<header className='bg-blue-800 dark:bg-blue-900 text-white p-4'>
								<div className='container mx-auto flex justify-between items-center'>
									<h1 className='text-2xl font-bold'>
										Foreign Visitor Service
									</h1>
									<ThemeToggle />
								</div>
							</header>
							<main className='container mx-auto py-4'>{children}</main>
							<footer className='bg-gray-200 dark:bg-gray-800 text-center p-4 mt-8'>
								<p>© 2024 Foreign Visitor Service. All rights reserved.</p>
							</footer>
						</div>
					</LanguageProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
