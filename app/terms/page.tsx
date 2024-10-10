"use client";

import Link from "next/link";
import { useLanguage, Language } from "../../components/LanguageContext";
import {
	termsTranslations,
	TermsTranslationKey,
} from "../../translations/terms";
import TermsSection from "../../components/TermsSection";

export default function TermsAndConditions() {
	const { language } = useLanguage();
	const t = (key: TermsTranslationKey): string => {
		return termsTranslations[language as Language][key] || key;
	};

	return (
		<main className='container mx-auto max-w-2xl p-4'>
			<div className='bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden'>
				<div className='bg-blue-600 dark:bg-blue-800 p-4 text-white'>
					<h1 className='text-xl font-bold text-center'>
						{t("terms_and_conditions")}
					</h1>
				</div>
				<div className='p-4 space-y-6'>
					<TermsSection
						title={t("legal_basis")}
						items={[t("law_1"), t("law_2"), t("law_3"), t("law_4"), t("law_5")]}
					/>

					<TermsSection
						title={t("stm_issuance")}
						items={[
							t("stm_requirement_1"),
							t("stm_requirement_2"),
							t("stm_requirement_3"),
						]}
					/>

					<TermsSection
						title={t("sponsor_obligation")}
						items={[
							t("sponsor_requirement_1"),
							t("sponsor_requirement_2"),
							t("sponsor_requirement_3"),
							t("sponsor_requirement_4"),
							t("sponsor_requirement_5"),
							t("sponsor_requirement_6"),
							t("sponsor_requirement_7"),
							t("sponsor_requirement_8"),
						]}
					/>

					<TermsSection
						title={t("accommodation_obligation")}
						items={[
							t("accommodation_requirement_1"),
							t("accommodation_requirement_2"),
							t("accommodation_requirement_3"),
							t("accommodation_requirement_4"),
							t("accommodation_requirement_5"),
							t("accommodation_requirement_6"),
						]}
					/>

					<div className='flex flex-col space-y-4 mt-8'>
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
	);
}
