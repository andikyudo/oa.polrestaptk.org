// app/components/InputField.tsx
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
	<div className='relative'>
		<label
			htmlFor={name}
			className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
		>
			{t(name)}
		</label>
		<div className='mt-1 relative rounded-md shadow-sm'>
			<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
				<Icon className='h-5 w-5 text-gray-400' aria-hidden='true' />
			</div>
			<input
				type={type}
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				className='block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
				required
			/>
		</div>
	</div>
);
