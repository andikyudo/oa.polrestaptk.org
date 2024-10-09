"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className='p-2 rounded-full bg-gray-200 dark:bg-gray-700'
		>
			{theme === "dark" ? (
				<Sun className='w-5 h-5' />
			) : (
				<Moon className='w-5 h-5' />
			)}
		</button>
	);
}
