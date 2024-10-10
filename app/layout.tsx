import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./providers";
import { LanguageProvider } from "../components/LanguageProvider";
import LayoutContent from "./LayoutContent";
import { HeaderProvider } from "../components/HeaderContext";

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
				<ThemeProvider>
					<LanguageProvider>
						<HeaderProvider>
							<LayoutContent>{children}</LayoutContent>
						</HeaderProvider>
					</LanguageProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
