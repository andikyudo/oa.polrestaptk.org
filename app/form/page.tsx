"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
	CalendarIcon,
	ClockIcon,
	UserIcon,
	MapPinIcon,
	BriefcaseIcon,
	FlagIcon,
	FileTextIcon,
	PlaneIcon,
	GlobeIcon,
	ChevronRightIcon,
	ChevronLeftIcon,
	ScanIcon,
} from "lucide-react";
import { useFormState } from "../hooks/useFormState";
import { InputField } from "../../components/InputField";
import { useLanguage } from "../../components/LanguageContext";
import { useHeader } from "../../components/HeaderContext";

export default function RegistrationForm() {
	const { t } = useLanguage();
	const { setShowHeader } = useHeader();
	const [currentStep, setCurrentStep] = useState(1);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const { state: formData, handleChange } = useFormState({
		// ... (state remains the same)
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(formData);
		setIsSubmitted(true);
	};

	const steps = [
		{
			title: t("personal_information"),
			fields: ["name", "address", "occupation", "reportDate", "reportTime"],
		},
		{
			title: t("guest_information"),
			fields: [
				"guestName",
				"guestAddress",
				"nationality",
				"placeOfBirth",
				"dateOfBirth",
				"profession",
			],
		},
		{
			title: t("travel_documents"),
			fields: [
				"passportNumber",
				"passportExpiry",
				"issuedBy",
				"visaType",
				"visaDuration",
			],
		},
		{
			title: t("travel_information"),
			fields: [
				"arrivalDate",
				"arrivalFrom",
				"purposeOfVisit",
				"departureDate",
				"nextDestination",
				"nextCountry",
				"cityInIndonesia",
			],
		},
	];

	const getInfoText = (field: string) => {
		switch (field) {
			case "name":
				return t("name_info");
			case "passport_number":
				return t("passport_number_info");
			case "visa_type":
				return t("visa_type_info");
			// Add more cases for other fields that need info
			default:
				return undefined;
		}
	};

	useEffect(() => {
		setShowHeader(true);
		return () => setShowHeader(false);
	}, [setShowHeader]);

	return (
		<div className='min-h-screen bg-white    lg:px-8 transition-all duration-500 rounded-lg'>
			<div className=' max-w-4xl mx-auto'>
				<div className='bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden'>
					<div className='p-6 sm:p-10'>
						<h1 className='text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8'>
							{t("registration_form")}
						</h1>
						<div className='mb-8'>
							<div className='flex justify-between items-center'>
								{steps.map((step, index) => (
									<div key={index} className='flex flex-col items-center'>
										<div
											className={`rounded-full h-8 w-8 flex items-center justify-center ${
												currentStep > index + 1
													? "bg-green-500"
													: currentStep === index + 1
													? "bg-blue-500"
													: "bg-gray-300 dark:bg-gray-600"
											} text-white font-bold`}
										>
											{currentStep > index + 1 ? "✓" : index + 1}
										</div>
										<div className='text-[10px] pl-5 mt-2 text-gray-600 dark:text-gray-400'>
											{step.title}
										</div>
									</div>
								))}
							</div>
							<div className='mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full'>
								<div
									className='h-full bg-blue-500 rounded-full transition-all duration-500 ease-out'
									style={{
										width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
									}}
								></div>
							</div>
						</div>
						<form onSubmit={handleSubmit}>
							<div className='space-y-6 '>
								{steps[currentStep - 1].fields.map((field) => (
									<InputField
										key={field}
										name={field}
										label={t(field)}
										placeholder={t(`enter_${field}`)}
										icon={
											field.includes("Date")
												? CalendarIcon
												: field.includes("Time")
												? ClockIcon
												: field.includes("Name")
												? UserIcon
												: field.includes("Address")
												? MapPinIcon
												: field.includes("Occupation") ||
												  field.includes("Profession")
												? BriefcaseIcon
												: field.includes("Nationality") ||
												  field.includes("Country")
												? FlagIcon
												: field.includes("Passport") || field.includes("Visa")
												? FileTextIcon
												: field.includes("Arrival") ||
												  field.includes("Departure")
												? PlaneIcon
												: GlobeIcon
										}
										type={
											field.includes("Date")
												? "date"
												: field.includes("Time")
												? "time"
												: "text"
										}
										value={formData[field as keyof typeof formData]}
										onChange={handleChange}
										infoText={getInfoText(field)}
									/>
								))}
							</div>
							<div className='flex justify-between mt-8'>
								{currentStep > 1 && (
									<button
										type='button'
										onClick={() => setCurrentStep(currentStep - 1)}
										className='bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300 ease-in-out'
									>
										<ChevronLeftIcon className='h-5 w-5 mr-2' />
										{t("previous")}
									</button>
								)}
								{currentStep < steps.length ? (
									<button
										type='button'
										onClick={() => setCurrentStep(currentStep + 1)}
										className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300 ease-in-out ml-auto'
									>
										{t("next")}
										<ChevronRightIcon className='h-5 w-5 ml-2' />
									</button>
								) : (
									<button
										type='submit'
										className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300 ease-in-out ml-auto'
									>
										{t("submit_registration")}
									</button>
								)}
							</div>
						</form>
						{isSubmitted && (
							<div className='mt-8 text-center'>
								<Link
									href='/scan'
									className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300 ease-in-out'
								>
									<ScanIcon className='h-5 w-5 mr-2' />
									{t("proceed_to_scan")}
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
