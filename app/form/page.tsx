"use client";

import { useState } from "react";
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
} from "lucide-react";
import { useFormState } from "../hooks/useFormState";
import { InputField } from "../../components/InputField";
import { useLanguage } from "../../components/LanguageContext";

export default function RegistrationForm() {
	const { t } = useLanguage();
	const [currentStep, setCurrentStep] = useState(1);
	const { state: formData, handleChange } = useFormState({
		// ... (state remains the same)
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(formData);
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

	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-12 px-4 sm:px-6 lg:px-8 transition-all duration-500'>
			<div className='max-w-4xl mx-auto'>
				<div className='bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105'>
					<div className='bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 p-6 sm:p-10'>
						<h1 className='text-3xl sm:text-4xl font-bold text-center text-white'>
							{t("registration_form")}
						</h1>
					</div>
					<div className='p-6 sm:p-10'>
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
													: "bg-gray-300"
											} text-white font-bold`}
										>
											{currentStep > index + 1 ? "✓" : index + 1}
										</div>
										<div className='text-xs mt-2'>{step.title}</div>
									</div>
								))}
							</div>
							<div className='mt-4 h-2 bg-gray-200 rounded-full'>
								<div
									className='h-full bg-blue-500 rounded-full transition-all duration-500 ease-out'
									style={{
										width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
									}}
								></div>
							</div>
						</div>
						<form onSubmit={handleSubmit}>
							<div className='space-y-6'>
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
									/>
								))}
							</div>
							<div className='flex justify-between mt-8'>
								{currentStep > 1 && (
									<button
										type='button'
										onClick={() => setCurrentStep(currentStep - 1)}
										className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
									>
										<ChevronLeftIcon className='h-5 w-5 mr-2' />
										{t("previous")}
									</button>
								)}
								{currentStep < steps.length ? (
									<button
										type='button'
										onClick={() => setCurrentStep(currentStep + 1)}
										className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
									>
										{t("next")}
										<ChevronRightIcon className='h-5 w-5 ml-2' />
									</button>
								) : (
									<button
										type='submit'
										className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
									>
										{t("submit_registration")}
									</button>
								)}
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
