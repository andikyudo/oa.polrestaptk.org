"use server";

import { revalidatePath } from "next/cache";

export async function submitSTMD(prevState: any, formData: FormData) {
	// In a real application, you would process and store the form data here
	// For this example, we'll just simulate a submission delay
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const sponsorInfo = {
		name: formData.get("sponsorName"),
		address: formData.get("sponsorAddress"),
		occupation: formData.get("sponsorOccupation"),
		reportDate: formData.get("reportDate"),
		reportTime: formData.get("reportTime"),
	};

	const guestInfo = {
		name: formData.get("guestName"),
		address: formData.get("guestAddress"),
		nationality: formData.get("nationality"),
		placeOfBirth: formData.get("placeOfBirth"),
		dateOfBirth: formData.get("dateOfBirth"),
		profession: formData.get("profession"),
		passportNumber: formData.get("passportNumber"),
		passportExpiry: formData.get("passportExpiry"),
		visaType: formData.get("visaType"),
		visaDuration: formData.get("visaDuration"),
		arrivalDate: formData.get("arrivalDate"),
		arrivalFrom: formData.get("arrivalFrom"),
		purposeOfVisit: formData.get("purposeOfVisit"),
		departureDate: formData.get("departureDate"),
		nextDestination: formData.get("nextDestination"),
		nextCountry: formData.get("nextCountry"),
		cityInIndonesia: formData.get("cityInIndonesia"),
	};

	console.log("STMD Form submitted:", { sponsorInfo, guestInfo });

	// Revalidate the page to reflect the new data
	revalidatePath("/");

	return { success: true, message: "STMD submitted successfully!" };
}
