"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegistrationForm() {
	const [formData, setFormData] = useState({
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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(formData);
		// Here you would typically send the data to your backend
	};

	return (
		<div className='min-h-screen bg-gray-100 p-4'>
			<main className='container mx-auto max-w-3xl'>
				<h1 className='text-3xl font-bold text-center text-blue-800 mb-8'>
					Foreign Visitor Registration Form
				</h1>
				<form
					onSubmit={handleSubmit}
					className='bg-white shadow-md rounded-lg p-6'
				>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<div>
							<label
								htmlFor='name'
								className='block text-sm font-medium text-gray-700'
							>
								Name of Reporter
							</label>
							<input
								type='text'
								id='name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='address'
								className='block text-sm font-medium text-gray-700'
							>
								Address of Reporter
							</label>
							<input
								type='text'
								id='address'
								name='address'
								value={formData.address}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='occupation'
								className='block text-sm font-medium text-gray-700'
							>
								Occupation of Reporter
							</label>
							<input
								type='text'
								id='occupation'
								name='occupation'
								value={formData.occupation}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='reportDate'
								className='block text-sm font-medium text-gray-700'
							>
								Report Date
							</label>
							<input
								type='date'
								id='reportDate'
								name='reportDate'
								value={formData.reportDate}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='reportTime'
								className='block text-sm font-medium text-gray-700'
							>
								Report Time
							</label>
							<input
								type='time'
								id='reportTime'
								name='reportTime'
								value={formData.reportTime}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='guestName'
								className='block text-sm font-medium text-gray-700'
							>
								Guest Name
							</label>
							<input
								type='text'
								id='guestName'
								name='guestName'
								value={formData.guestName}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='guestAddress'
								className='block text-sm font-medium text-gray-700'
							>
								Guest Address
							</label>
							<input
								type='text'
								id='guestAddress'
								name='guestAddress'
								value={formData.guestAddress}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='nationality'
								className='block text-sm font-medium text-gray-700'
							>
								Nationality
							</label>
							<input
								type='text'
								id='nationality'
								name='nationality'
								value={formData.nationality}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='placeOfBirth'
								className='block text-sm font-medium text-gray-700'
							>
								Place of Birth
							</label>
							<input
								type='text'
								id='placeOfBirth'
								name='placeOfBirth'
								value={formData.placeOfBirth}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='dateOfBirth'
								className='block text-sm font-medium text-gray-700'
							>
								Date of Birth
							</label>
							<input
								type='date'
								id='dateOfBirth'
								name='dateOfBirth'
								value={formData.dateOfBirth}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='profession'
								className='block text-sm font-medium text-gray-700'
							>
								Profession
							</label>
							<input
								type='text'
								id='profession'
								name='profession'
								value={formData.profession}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='passportNumber'
								className='block text-sm font-medium text-gray-700'
							>
								Passport Number
							</label>
							<input
								type='text'
								id='passportNumber'
								name='passportNumber'
								value={formData.passportNumber}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='passportExpiry'
								className='block text-sm font-medium text-gray-700'
							>
								Passport Expiry Date
							</label>
							<input
								type='date'
								id='passportExpiry'
								name='passportExpiry'
								value={formData.passportExpiry}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='issuedBy'
								className='block text-sm font-medium text-gray-700'
							>
								Passport Issued By
							</label>
							<input
								type='text'
								id='issuedBy'
								name='issuedBy'
								value={formData.issuedBy}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='visaType'
								className='block text-sm font-medium text-gray-700'
							>
								Visa Type
							</label>
							<input
								type='text'
								id='visaType'
								name='visaType'
								value={formData.visaType}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='visaDuration'
								className='block text-sm font-medium text-gray-700'
							>
								Visa Duration
							</label>
							<input
								type='text'
								id='visaDuration'
								name='visaDuration'
								value={formData.visaDuration}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='arrivalDate'
								className='block text-sm font-medium text-gray-700'
							>
								Arrival Date
							</label>
							<input
								type='date'
								id='arrivalDate'
								name='arrivalDate'
								value={formData.arrivalDate}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='arrivalFrom'
								className='block text-sm font-medium text-gray-700'
							>
								Arrival From
							</label>
							<input
								type='text'
								id='arrivalFrom'
								name='arrivalFrom'
								value={formData.arrivalFrom}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='purposeOfVisit'
								className='block text-sm font-medium text-gray-700'
							>
								Purpose of Visit
							</label>
							<input
								type='text'
								id='purposeOfVisit'
								name='purposeOfVisit'
								value={formData.purposeOfVisit}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='departureDate'
								className='block text-sm font-medium text-gray-700'
							>
								Departure Date
							</label>
							<input
								type='date'
								id='departureDate'
								name='departureDate'
								value={formData.departureDate}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='nextDestination'
								className='block text-sm font-medium text-gray-700'
							>
								Next Destination
							</label>
							<input
								type='text'
								id='nextDestination'
								name='nextDestination'
								value={formData.nextDestination}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='nextCountry'
								className='block text-sm font-medium text-gray-700'
							>
								Next Country
							</label>
							<input
								type='text'
								id='nextCountry'
								name='nextCountry'
								value={formData.nextCountry}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='cityInIndonesia'
								className='block text-sm font-medium text-gray-700'
							>
								City in Indonesia
							</label>
							<input
								type='text'
								id='cityInIndonesia'
								name='cityInIndonesia'
								value={formData.cityInIndonesia}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
								required
							/>
						</div>
					</div>
					<div className='mt-6 flex flex-col space-y-4'>
						<button
							type='submit'
							className='w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300'
						>
							Submit Registration
						</button>
						<Link
							href='/terms'
							className='w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300'
						>
							Back to Terms
						</Link>
					</div>
				</form>
			</main>
		</div>
	);
}
