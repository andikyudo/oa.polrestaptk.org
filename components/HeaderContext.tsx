// components/HeaderContext.tsx
import { HeaderProviderClient } from "./HeaderContextClient";

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <HeaderProviderClient>{children}</HeaderProviderClient>;
};

export { useHeader } from "./HeaderContextClient";
