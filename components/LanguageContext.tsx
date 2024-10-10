import { createContext, useContext } from "react";

export type Language = "en" | "id" | "zh" | "kra" | "ara" | "thai";

export interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
);

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage harus digunakan dalam LanguageProvider");
	}
	return context;
};
