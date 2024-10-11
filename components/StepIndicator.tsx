// components/StepIndicator.tsx
import React from "react";
import { Check } from "lucide-react";

interface StepIndicatorProps {
	steps: string[];
	currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
	steps,
	currentStep,
}) => {
	return (
		<div className='w-full bg-gray-100 dark:bg-gray-700 px-6 py-4'>
			<div className='max-w-3xl mx-auto flex justify-between items-center'>
				{steps.map((step, index) => (
					<div key={step} className='flex flex-col items-center'>
						<div className='relative'>
							<div
								className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2
                ${
									index < currentStep
										? "bg-blue-600 border-blue-600 text-white"
										: index === currentStep - 1
										? "bg-white border-blue-600 text-blue-600"
										: "bg-white border-gray-300 text-gray-400"
								}`}
							>
								{index < currentStep ? (
									<Check className='w-5 h-5' />
								) : (
									index + 1
								)}
							</div>
							{index < steps.length - 1 && (
								<div className='absolute top-1/2 left-8 w-full h-0.5 bg-gray-300 dark:bg-gray-600 -translate-y-1/2'>
									<div
										className='h-full bg-blue-600 transition-all duration-300'
										style={{
											width:
												index < currentStep - 1
													? "100%"
													: index === currentStep - 1
													? "50%"
													: "0%",
										}}
									/>
								</div>
							)}
						</div>
						<span className='mt-2 text-xs text-center'>{step}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default StepIndicator;
