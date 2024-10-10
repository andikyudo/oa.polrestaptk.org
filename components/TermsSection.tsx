// components/TermsSection.tsx

import React from "react";

interface TermsSectionProps {
	title: string;
	items: string[];
}

const TermsSection: React.FC<TermsSectionProps> = ({ title, items }) => (
	<section>
		<h2 className='text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200'>
			{title}
		</h2>
		<ul className='space-y-2 text-gray-700 dark:text-gray-300 '>
			{items.map((item, index) => (
				<li key={index} className='pl-3 relative text-sm'>
					<span className='absolute left-0'>•</span>
					<span className='block pl-4'>{item}</span>
				</li>
			))}
		</ul>
	</section>
);

export default TermsSection;
