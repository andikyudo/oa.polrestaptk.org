"use client";

import React, { createContext, useContext, useState } from "react";

type HeaderContextType = {
	showHeader: boolean;
	setShowHeader: (show: boolean) => void;
};

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProviderClient: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [showHeader, setShowHeader] = useState(false);
	return (
		<HeaderContext.Provider value={{ showHeader, setShowHeader }}>
			{children}
		</HeaderContext.Provider>
	);
};

export const useHeader = () => {
	const context = useContext(HeaderContext);
	if (context === undefined) {
		throw new Error("useHeader must be used within a HeaderProvider");
	}
	return context;
};
