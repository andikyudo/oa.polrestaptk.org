import React from "react";
import { IconType } from "lucide-react";

interface InputFieldProps {
	name: string;
	icon: IconType;
	type?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	t: (key: string) => string;
}

export const InputField: React.FC<InputFieldProps> = ({
	name,
	icon: Icon,
	type = "text",
	value,
	onChange,
	t,
}) => (
	<div className='relative mb-6'>
		<label
			htmlFor={name}
			className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
		>
			{t(name)}
		</label>
		<div className='relative mt-1 rounded-md shadow-sm'>
			<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
				<Icon
					className='h-5 w-5 text-gray-400 dark:text-gray-500'
					aria-hidden='true'
				/>
			</div>
			<input
				type={type}
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				className='block w-full pr-3 py-4 rounded-md border-gray-300 dark:border-gray-600 pl-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm'
				placeholder={t(name)}
				required
			/>
		</div>
	</div>
);
