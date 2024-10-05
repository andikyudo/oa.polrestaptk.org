import Image from "next/image";

interface Country {
	code: string;
	name: string;
}

interface LanguageSelectorProps {
	countries: Country[];
	selectedLanguage: string;
	onSelectLanguage: (code: string) => void;
}

export default function LanguageSelector({
	countries,
	selectedLanguage,
	onSelectLanguage,
}: LanguageSelectorProps) {
	return (
		<div className='grid grid-cols-2 gap-4'>
			{countries.map((country) => (
				<button
					key={country.code}
					className={`flex items-center justify-center p-4 border rounded-md ${
						selectedLanguage === country.code
							? "border-blue-500 bg-blue-50"
							: "border-gray-300 hover:bg-gray-50"
					}`}
					onClick={() => onSelectLanguage(country.code)}
				>
					<Image
						src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
						width={40}
						height={30}
						alt={`${country.name} flag`}
						className='mr-2'
					/>
					<span className='text-sm font-medium'>{country.name}</span>
				</button>
			))}
		</div>
	);
}
