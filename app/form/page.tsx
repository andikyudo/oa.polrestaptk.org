"use client";

import { useTranslation } from "next-i18next";
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
} from "lucide-react";
import { useFormState } from "../hooks/useFormState";
import { InputField } from "../../components/InputField";

export default function RegistrationForm() {
	const { t } = useTranslation("common");
	const { state: formData, handleChange } = useFormState({
		name: "",
		address: "",
		occupation: "",
		reportDate: "",
		reportTime: "",
		guestName: "",
		guestAddress: "",
		nationality: "",
		placeOfBirth: "",
		dateOfBirth: "",
		profession: "",
		passportNumber: "",
		passportExpiry: "",
		issuedBy: "",
		visaType: "",
		visaDuration: "",
		arrivalDate: "",
		arrivalFrom: "",
		purposeOfVisit: "",
		departureDate: "",
		nextDestination: "",
		nextCountry: "",
		cityInIndonesia: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<div className='min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-blue-900 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-4xl mx-auto'>
				<div className='bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden'>
					<div className='bg-blue-600 dark:bg-blue-800 p-6 sm:p-10'>
						<h1 className='text-3xl sm:text-4xl font-bold text-center text-white'>
							{t("registration_form")}
						</h1>
					</div>
					<form onSubmit={handleSubmit} className='p-6 sm:p-10 space-y-8'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8'>
							<InputField
								name='name'
								icon={UserIcon}
								value={formData.name}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='address'
								icon={MapPinIcon}
								value={formData.address}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='occupation'
								icon={BriefcaseIcon}
								value={formData.occupation}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='reportDate'
								icon={CalendarIcon}
								type='date'
								value={formData.reportDate}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='reportTime'
								icon={ClockIcon}
								type='time'
								value={formData.reportTime}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='guestName'
								icon={UserIcon}
								value={formData.guestName}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='guestAddress'
								icon={MapPinIcon}
								value={formData.guestAddress}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='nationality'
								icon={FlagIcon}
								value={formData.nationality}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='placeOfBirth'
								icon={MapPinIcon}
								value={formData.placeOfBirth}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='dateOfBirth'
								icon={CalendarIcon}
								type='date'
								value={formData.dateOfBirth}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='profession'
								icon={BriefcaseIcon}
								value={formData.profession}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='passportNumber'
								icon={FileTextIcon}
								value={formData.passportNumber}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='passportExpiry'
								icon={CalendarIcon}
								type='date'
								value={formData.passportExpiry}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='issuedBy'
								icon={FlagIcon}
								value={formData.issuedBy}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='visaType'
								icon={FileTextIcon}
								value={formData.visaType}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='visaDuration'
								icon={ClockIcon}
								value={formData.visaDuration}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='arrivalDate'
								icon={CalendarIcon}
								type='date'
								value={formData.arrivalDate}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='arrivalFrom'
								icon={PlaneIcon}
								value={formData.arrivalFrom}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='purposeOfVisit'
								icon={BriefcaseIcon}
								value={formData.purposeOfVisit}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='departureDate'
								icon={CalendarIcon}
								type='date'
								value={formData.departureDate}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='nextDestination'
								icon={MapPinIcon}
								value={formData.nextDestination}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='nextCountry'
								icon={GlobeIcon}
								value={formData.nextCountry}
								onChange={handleChange}
								t={t}
							/>
							<InputField
								name='cityInIndonesia'
								icon={MapPinIcon}
								value={formData.cityInIndonesia}
								onChange={handleChange}
								t={t}
							/>
						</div>
						<div className='flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 mt-8'>
							<Link
								href='/terms'
								className='w-full sm:w-auto bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded inline-flex items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
							>
								{t("back_to_terms")}
							</Link>
							<button
								type='submit'
								className='w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded inline-flex items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
							>
								{t("submit_registration")}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
