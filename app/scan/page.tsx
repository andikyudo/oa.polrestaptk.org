"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "../../components/LanguageContext";
import DocumentScanner from "../../components/DocumentScanner";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useHeader } from "../../components/HeaderContext";

const documentTypes = ["ktp", "passport", "visa", "itk"];

const ScanPage: React.FC = () => {
	const { t } = useLanguage();
	const { setShowHeader } = useHeader();
	const [currentDocumentIndex, setCurrentDocumentIndex] = useState(0);
	const [scannedDocuments, setScannedDocuments] = useState<string[]>([]);

	useEffect(() => {
		setShowHeader(true);
		return () => setShowHeader(false);
	}, [setShowHeader]);

	const handleScanComplete = (dataUri: string, isBlurry: boolean) => {
		if (!isBlurry) {
			setScannedDocuments([...scannedDocuments, dataUri]);
			if (currentDocumentIndex < documentTypes.length - 1) {
				setCurrentDocumentIndex(currentDocumentIndex + 1);
			}
		}
	};

	const handleNavigation = (direction: "next" | "previous") => {
		if (
			direction === "next" &&
			currentDocumentIndex < documentTypes.length - 1
		) {
			setCurrentDocumentIndex(currentDocumentIndex + 1);
		} else if (direction === "previous" && currentDocumentIndex > 0) {
			setCurrentDocumentIndex(currentDocumentIndex - 1);
		}
	};

	const iconButtonClass =
		"p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white transition duration-300 ease-in-out";

	return (
		<div className='min-h-screen bg-white lg:px-8 transition-all duration-500'>
			<div className='max-w-4xl mx-auto'>
				<div className='bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden'>
					<div className='p-6 sm:p-10'>
						<h1 className='text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8'>
							{t("document_scanning")}
						</h1>

						<div className='mb-8'>
							<div className='flex justify-between items-start relative'>
								{documentTypes.map((type, index) => (
									<div
										key={index}
										className='flex flex-col items-center w-1/4 px-1'
									>
										<div
											className={`absolute top-0 rounded-full h-8 w-8 flex items-center justify-center ${
												index < currentDocumentIndex
													? "bg-green-500"
													: index === currentDocumentIndex
													? "bg-blue-500"
													: "bg-gray-300 dark:bg-gray-600"
											} text-white font-bold z-10 text-xs`}
											style={{ left: `calc(25% * ${index} + 12.5% - 16px)` }}
										>
											{index < currentDocumentIndex ? "✓" : index + 1}
										</div>
										<div
											className={`mt-10 p-2 rounded-lg ${
												index === currentDocumentIndex
													? "bg-blue-100 dark:bg-blue-900"
													: "bg-gray-100 dark:bg-gray-700"
											} transition-all duration-300 ease-in-out h-16 flex items-center justify-center`}
										>
											<span className='text-xs font-medium text-center text-gray-800 dark:text-white'>
												{t(type)}
											</span>
										</div>
									</div>
								))}
							</div>
							<div className='mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full'>
								<div
									className='h-full bg-blue-500 rounded-full transition-all duration-500 ease-out'
									style={{
										width: `${
											(currentDocumentIndex / (documentTypes.length - 1)) * 100
										}%`,
									}}
								></div>
							</div>
						</div>

						<DocumentScanner
							onScanComplete={handleScanComplete}
							currentDocument={t(documentTypes[currentDocumentIndex])}
						/>

						<div className='flex justify-between mt-8'>
							<button
								onClick={() => handleNavigation("previous")}
								disabled={currentDocumentIndex === 0}
								className={iconButtonClass}
								aria-label={t("previous")}
							>
								<ChevronLeft className='h-6 w-6' />
							</button>
							{currentDocumentIndex < documentTypes.length - 1 && (
								<button
									onClick={() => handleNavigation("next")}
									className={iconButtonClass}
									aria-label={t("next")}
								>
									<ChevronRight className='h-6 w-6' />
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScanPage;
