// components/RunningAnnouncement.tsx
import React from "react";

interface RunningAnnouncementProps {
	text: string;
}

const RunningAnnouncement: React.FC<RunningAnnouncementProps> = ({ text }) => {
	return (
		<div className='w-full overflow-hidden bg-yellow-100 dark:bg-amber-400  py-1'>
			<div className='animate-marquee whitespace-nowrap'>
				<span className='text-xs text-black dark:text-black'>{text}</span>
			</div>
		</div>
	);
};

export default RunningAnnouncement;
