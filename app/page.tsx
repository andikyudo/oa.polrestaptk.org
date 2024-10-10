"use client";

import { useLanguage } from "../components/LanguageContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LanguageSelector from "../components/LanguageSelector";
import { useHeader } from "../components/HeaderContext";

export default function Home() {
	const { t } = useLanguage();
	const router = useRouter();
	const { setShowHeader } = useHeader();

	const handleContinue = () => {
		setShowHeader(true);
		router.push("/terms");
	};

	return (
		<div className='w-full max-w-md bg-white shadow-2xl rounded-lg'>
			<div className='bg-white p-6 text-black text-center rounded-t-lg'>
				<div className='flex justify-between items-center space-x-6 mb-2'>
					<Image
						src='/garuda.png'
						alt='Foreign Visitor Service Logo'
						width={90}
						height={90}
					/>
					<Image
						src='/logo_polresta.png'
						alt='Second Icon'
						width={70}
						height={70}
					/>
				</div>
				<div className='border-b-2 border-yellow-500 w-full mb-6'></div>
				<h1
					className='text-xl font-bold mb-10'
					dangerouslySetInnerHTML={{ __html: t("welcome") }}
				></h1>
				<p className='text-gray-900'>{t("select_language")}</p>
			</div>
			<div className='p-6 pb-20'>
				<div className='relative z-10 mb-6'>
					<LanguageSelector />
				</div>
				<button
					onClick={handleContinue}
					className='w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
				>
					{t("continue")}
				</button>
			</div>
		</div>
	);
}
