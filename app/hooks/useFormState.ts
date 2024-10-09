import { useState } from "react";

export const useFormState = (initialState: Record<string, string>) => {
	const [state, setState] = useState(initialState);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setState((prev) => ({ ...prev, [name]: value }));
	};

	return { state, handleChange };
};
