"use client";

import React, { useState, ReactNode } from "react";
import {
	LanguageContext,
	Language,
	LanguageContextType,
} from "./LanguageContext";

const translations: Record<Language, Record<string, string>> = {
	en: {
		welcome: "Welcome to Foreign Visitor Service",
		select_language: "Please select your language",
		continue: "Continue",
		terms_and_conditions: "Terms and Conditions",
		foreign_visitor_regulations: "Foreign Visitor Regulations",
		terms_content:
			"As a foreign visitor, you are required to comply with local regulations...",
		proceed_to_registration: "Proceed to Registration",
		back_to_home: "Back to Home",
		registration_form: "Registration Form",
		personal_information: "Personal Information",
		guest_information: "Guest Information",
		travel_documents: "Travel Documents",
		travel_information: "Travel Information",
		name: "Name",
		address: "Address",
		occupation: "Occupation",
		report_date: "Report Datesss",
		report_time: "Report Time",
		guest_name: "Guest Name",
		guest_address: "Guest Address",
		nationality: "Nationality",
		place_of_birth: "Place of Birth",
		date_of_birth: "Date of Birth",
		profession: "Profession",
		passport_number: "Passport Number",
		passport_expiry: "Passport Expiry",
		issued_by: "Issued By",
		visa_type: "Visa Type",
		visa_duration: "Visa Duration",
		arrival_date: "Arrival Date",
		arrival_from: "Arrival From",
		purpose_of_visit: "Purpose of Visit",
		departure_date: "Departure Date",
		next_destination: "Next Destination",
		next_country: "Next Country",
		city_in_indonesia: "City in Indonesia",
		previous: "Previous",
		next: "Next",
		submit_registration: "Submit Registration",
		enter_name: "Enter your name",
		enter_address: "Enter your address",
		enter_occupation: "Enter your occupation",
		select_date: "Select date",
		select_time: "Select time",
		// Tambahkan terjemahan lainnya sesuai kebutuhan
	},
	id: {
		welcome: "Selamat Datang di Layanan Pengunjung Asing",
		select_language: "Silakan pilih bahasa Anda",
		continue: "Lanjutkan",
		registration_form: "Formulir Pendaftaran",
		personal_information: "Informasi Pribadi",
		guest_information: "Informasi Tamu",
		travel_documents: "Dokumen Perjalanan",
		travel_information: "Informasi Perjalanan",
		name: "Nama",
		address: "Alamat",
		occupation: "Pekerjaan",
		reportDate: "Tanggal Lapor",
		reportTime: "Waktu Lapor",
		guestName: "Nama Tamu",
		guestAddress: "Alamat Tamu",
		nationality: "Kewarganegaraan",
		placeOfBirth: "Tempat Lahir",
		dateOfBirth: "Tanggal Lahir",
		profession: "Profesi",
		passportNumber: "Nomor Paspor",
		passportExpiry: "Tanggal Kadaluarsa Paspor",
		issuedBy: "Dikeluarkan Oleh",
		visaType: "Jenis Visa",
		visaDuration: "Durasi Visa",
		arrivalDate: "Tanggal Kedatangan",
		arrivalFrom: "Kedatangan Dari",
		purposeOfVisit: "Tujuan Kunjungan",
		departureDate: "Tanggal Keberangkatan",
		nextDestination: "Tujuan Selanjutnya",
		nextCountry: "Negara Selanjutnya",
		cityInIndonesia: "Kota di Indonesia",
		previous: "Sebelumnya",
		next: "Selanjutnya",
		submit_registration: "Kirim Pendaftaran",
		enter_name: "Masukkan nama Anda",
		enter_address: "Masukkan alamat Anda",
		enter_occupation: "Masukkan pekerjaan Anda",
		enter_reportDate: "Pilih tanggal lapor",
		enter_reportTime: "Pilih waktu lapor",
		enter_guestName: "Masukkan nama tamu",
		enter_guestAddress: "Masukkan alamat tamu",
		enter_nationality: "Masukkan kewarganegaraan",
		enter_placeOfBirth: "Masukkan tempat lahir",
		enter_dateOfBirth: "Pilih tanggal lahir",
		enter_profession: "Masukkan profesi",
		enter_passportNumber: "Masukkan nomor paspor",
		enter_passportExpiry: "Pilih tanggal kadaluarsa paspor",
		enter_issuedBy: "Masukkan tempat penerbitan",
		enter_visaType: "Masukkan jenis visa",
		enter_visaDuration: "Masukkan durasi visa",
		enter_arrivalDate: "Pilih tanggal kedatangan",
		enter_arrivalFrom: "Masukkan tempat keberangkatan",
		enter_purposeOfVisit: "Masukkan tujuan kunjungan",
		enter_departureDate: "Pilih tanggal keberangkatan",
		enter_nextDestination: "Masukkan tujuan selanjutnya",
		enter_nextCountry: "Masukkan negara selanjutnya",
		enter_cityInIndonesia: "Masukkan kota di Indonesia",
		// ... tambahkan terjemahan lainnya jika diperlukan
	},
	zh: {
		welcome: "欢迎使用外国访客服务",
		select_language: "请选择您的语言",
		continue: "继续",
		terms_and_conditions: "条款和条件",
		foreign_visitor_regulations: "外国访客规定",
		terms_content: "作为外国访客，您需要遵守当地法规...",
		proceed_to_registration: "继续注册",
		back_to_home: "返回首页",
		registration_form: "注册表",
		personal_information: "个人信息",
		guest_information: "访客信息",
		travel_documents: "旅行证件",
		travel_information: "旅行信息",
		name: "姓名",
		address: "地址",
		occupation: "职业",
		report_date: "报告日期",
		report_time: "报告时间",
		guest_name: "访客姓名",
		guest_address: "访客地址",
		nationality: "国籍",
		place_of_birth: "出生地",
		date_of_birth: "出生日期",
		profession: "职业",
		passport_number: "护照号码",
		passport_expiry: "护照有效期",
		issued_by: "签发机关",
		visa_type: "签证类型",
		visa_duration: "签证有效期",
		arrival_date: "到达日期",
		arrival_from: "来自",
		purpose_of_visit: "访问目的",
		departure_date: "离开日期",
		next_destination: "下一个目的地",
		next_country: "下一个国家",
		city_in_indonesia: "印度尼西亚城市",
		previous: "上一步",
		next: "下一步",
		submit_registration: "提交注册",
		enter_name: "输入您的姓名",
		enter_address: "输入您的地址",
		enter_occupation: "输入您的职业",
		select_date: "选择日期",
		select_time: "选择时间",
		// Tambahkan terjemahan lainnya sesuai kebutuhan
	},
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [language, setLanguage] = useState<Language>("en");

	const t = (key: string): string => {
		return translations[language][key] || key;
	};

	const contextValue: LanguageContextType = {
		language,
		setLanguage,
		t,
	};

	return (
		<LanguageContext.Provider value={contextValue}>
			{children}
		</LanguageContext.Provider>
	);
};
