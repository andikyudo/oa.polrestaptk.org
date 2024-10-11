"use client";

import React, { useState } from "react";
import { LucideIcon, Info } from "lucide-react";

interface InputFieldProps {
	name: string;
	label: string;
	placeholder: string;
	icon: LucideIcon;
	type?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	infoText?: string; // New prop for info text
}

export const InputField: React.FC<InputFieldProps> = ({
	name,
	label,
	placeholder,
	icon: Icon,
	type = "text",
	value,
	onChange,
	infoText,
}) => {
	const [showInfo, setShowInfo] = useState(false);

	return (
		<div className='relative mb-6'>
			<div className='flex items-center justify-between mb-1'>
				<label
					htmlFor={name}
					className='block text-sm font-medium text-gray-700 dark:text-gray-300'
				>
					{label}
				</label>
				{infoText && (
					<button
						type='button'
						onClick={() => setShowInfo(!showInfo)}
						className='ml-2 text-gray-400 hover:text-gray-500 focus:outline-none'
						aria-label={`Show information for ${label}`}
					>
						<Info className='h-4 w-4' />
					</button>
				)}
			</div>
			{showInfo && (
				<div className='absolute z-10 mt-1 p-2 bg-yellow-300 dark:bg-yellow-300 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg text-xs text-gray-600 dark:text-black'>
					{infoText}
				</div>
			)}
			<div className='relative mt-2 rounded-md shadow-sm border border-zinc-400'>
				<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
					<Icon
						className='h-4 w-4 text-gray-400 dark:text-gray-500'
						aria-hidden='true'
					/>
				</div>
				<input
					type={type}
					id={name}
					name={name}
					value={value}
					onChange={onChange}
					className='block w-full pr-3 py-4 rounded-md border-gray-300 dark:border-gray-600 pl-10 focus:border-red-500 focus:ring-blue-500 dark:bg-gray-700 text-black dark:text-white sm:text-xs'
					placeholder={placeholder}
					required
				/>
			</div>
		</div>
	);
};
