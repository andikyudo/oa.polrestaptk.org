"use client";

import React, { useState, ReactNode } from "react";
import {
	LanguageContext,
	Language,
	LanguageContextType,
} from "./LanguageContext";

const translations: Record<Language, Record<string, string>> = {
	en: {
		welcome: "Welcome to<br>Foreign Visitor Service",
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
		name_info: "Enter your full name as it appears on your official documents.",
		passport_number_info:
			"Your passport number can be found on the main page of your passport.",
		visa_type_info:
			"Select the type of visa you are applying for or currently hold.",
		document_scanning: "Document Scanning",
		scanning: "Scanning",
		capture_image: "Capture Image",
		upload_document: "Upload Document",
		or: "or",
		processing: "Processing...",
		capture_success: "Capture Successful",
		image_blurry_retake: "Image Blurry, Please Retake",
		align_document_guide: "Align document within the green outline",
		camera_access_error: "Camera access error. Please check permissions.",
		ktp: "ID Card",
		passport: "Passport",
		visa: "Visa / E-Visa",
		itk: "Temporary Stay Permit Card",
		// Tambahkan terjemahan lainnya sesuai kebutuhan
	},
	id: {
		welcome: "Selamat Datang<br>di Layanan Pengunjung Orang Asing",
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
		name_info: "Lengkapi Nama Sponsor",
		upload_document: "Unggah Dokumen",
		scan_complete: "Pemindaian Selesai!",
		document_scanning: "Pemindaian Dokumen",
		scanning: "Memindai",
		capture_image: "Ambil Gambar",
		or: "atau",
		processing: "Memproses...",
		capture_success: "Pengambilan Berhasil",
		image_blurry_retake: "Gambar Buram, Silakan Ambil Ulang",
		align_document_guide: "Sejajarkan dokumen dalam garis hijau",
		camera_access_error: "Kesalahan akses kamera. Periksa izin.",
		ktp: "KTP",
		passport: "Paspor",
		visa: "Visa / E-Visa",
		itk: "Kartu Izin Tinggal Sementara",
		image_blurry_warning:
			"Gambar terlihat blur. Mungkin Anda ingin mengambil ulang.",

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
		name_info: "请输入您的全名，与官方文件上的名字一致。",
		passport_number_info: "您的护照号码可以在护照的主页上找到。",
		visa_type_info: "选择您正在申请或目前持有的签证类型。",
		document_scanning: "文件扫描",
		scanning: "正在扫描",
		capture_image: "拍摄图像",
		upload_document: "上传文件",
		or: "或",
		processing: "处理中...",
		capture_success: "拍摄成功",
		image_blurry_retake: "图像模糊，请重新拍摄",
		align_document_guide: "请将文件对准绿色轮廓线",
		camera_access_error: "相机访问错误。请检查权限。",
		ktp: "身份证",
		passport: "护照",
		visa: "签证 / 电子签证",
		itk: "临时居留许可证",
		image_blurry_warning: "图像看起来模糊。您可能需要重新拍摄。",
		// Tambahkan terjemahan lainnya sesuai kebutuhan
	},
	kra: {
		welcome: "외국인 방문자 서비스에<br>오신 것을 환영합니다",
		select_language: "언어를 선택해주세요",
		continue: "계속하기",
		terms_and_conditions: "이용약관",
		foreign_visitor_regulations: "외국인 방문자 규정",
		terms_content: "외국인 방문자로서 귀하는 현지 규정을 준수해야 합니다...",
		proceed_to_registration: "등록 진행하기",
		back_to_home: "홈으로 돌아가기",
		registration_form: "등록 양식",
		personal_information: "개인 정보",
		guest_information: "방문자 정보",
		travel_documents: "여행 서류",
		travel_information: "여행 정보",
		name: "이름",
		address: "주소",
		occupation: "직업",
		report_date: "신고 날짜",
		report_time: "신고 시간",
		guest_name: "방문자 이름",
		guest_address: "방문자 주소",
		nationality: "국적",
		place_of_birth: "출생지",
		date_of_birth: "생년월일",
		profession: "직업",
		passport_number: "여권 번호",
		passport_expiry: "여권 만료일",
		issued_by: "발급 기관",
		visa_type: "비자 유형",
		visa_duration: "비자 기간",
		arrival_date: "도착 날짜",
		arrival_from: "출발지",
		purpose_of_visit: "방문 목적",
		departure_date: "출국 날짜",
		next_destination: "다음 목적지",
		next_country: "다음 국가",
		city_in_indonesia: "인도네시아 내 도시",
		previous: "이전",
		next: "다음",
		submit_registration: "등록 제출",
		enter_name: "이름을 입력하세요",
		enter_address: "주소를 입력하세요",
		enter_occupation: "직업을 입력하세요",
		select_date: "날짜 선택",
		select_time: "시간 선택",
	},
	ara: {
		welcome: "مرحبًا بكم في<br>خدمة الزوار الأجانب",
		select_language: "الرجاء اختيار لغتك",
		continue: "استمرار",
		terms_and_conditions: "الشروط والأحكام",
		foreign_visitor_regulations: "لوائح الزوار الأجانب",
		terms_content: "كزائر أجنبي، يتعين عليك الامتثال للوائح المحلية...",
		proceed_to_registration: "المتابعة إلى التسجيل",
		back_to_home: "العودة إلى الصفحة الرئيسية",
		registration_form: "نموذج التسجيل",
		personal_information: "المعلومات الشخصية",
		guest_information: "معلومات الزائر",
		travel_documents: "وثائق السفر",
		travel_information: "معلومات السفر",
		name: "الاسم",
		address: "العنوان",
		occupation: "المهنة",
		report_date: "تاريخ التقرير",
		report_time: "وقت التقرير",
		guest_name: "اسم الزائر",
		guest_address: "عنوان الزائر",
		nationality: "الجنسية",
		place_of_birth: "مكان الميلاد",
		date_of_birth: "تاريخ الميلاد",
		profession: "المهنة",
		passport_number: "رقم جواز السفر",
		passport_expiry: "تاريخ انتهاء جواز السفر",
		issued_by: "جهة الإصدار",
		visa_type: "نوع التأشيرة",
		visa_duration: "مدة التأشيرة",
		arrival_date: "تاريخ الوصول",
		arrival_from: "القدوم من",
		purpose_of_visit: "الغرض من الزيارة",
		departure_date: "تاريخ المغادرة",
		next_destination: "الوجهة التالية",
		next_country: "البلد التالي",
		city_in_indonesia: "المدينة في إندونيسيا",
		previous: "السابق",
		next: "التالي",
		submit_registration: "تقديم التسجيل",
		enter_name: "أدخل اسمك",
		enter_address: "أدخل عنوانك",
		enter_occupation: "أدخل مهنتك",
		select_date: "اختر التاريخ",
		select_time: "اختر الوقت",
		name_info: "أدخل اسمك الكامل كما يظهر في وثائقك الرسمية",
		passport_number_info:
			"يمكن العثور على رقم جواز سفرك في الصفحة الرئيسية من جواز السفر",
		visa_type_info:
			"اختر نوع التأشيرة التي تتقدم بطلب للحصول عليها أو التي تحملها حاليًا",
		document_scanning: "مسح المستندات",
		scanning: "جاري المسح",
		capture_image: "التقاط الصورة",
		upload_document: "تحميل المستند",
		or: "أو",
		processing: "جاري المعالجة...",
		capture_success: "تم التقاط الصورة بنجاح",
		image_blurry_retake: "الصورة غير واضحة، يرجى إعادة التقاطها",
		align_document_guide: "قم بمحاذاة المستند داخل الإطار الأخضر",
		camera_access_error: "خطأ في الوصول إلى الكاميرا. يرجى التحقق من الأذونات.",
		ktp: "بطاقة الهوية",
		passport: "جواز السفر",
		visa: "التأشيرة / التأشيرة الإلكترونية",
		itk: "بطاقة تصريح الإقامة المؤقتة",
		image_blurry_warning: "تبدو الصورة غير واضحة. قد ترغب في إعادة التقاطها.",
	},
	thai: {
		welcome: "ยินดีต้อนรับสู่<br>บริการสำหรับผู้เยี่ยมเยือนต่างชาติ",
		select_language: "กรุณาเลือกภาษาของคุณ",
		continue: "ดำเนินการต่อ",
		terms_and_conditions: "ข้อกำหนดและเงื่อนไข",
		foreign_visitor_regulations: "ระเบียบสำหรับผู้เยี่ยมเยือนต่างชาติ",
		terms_content:
			"ในฐานะผู้เยี่ยมเยือนต่างชาติ คุณจำเป็นต้องปฏิบัติตามกฎระเบียบท้องถิ่น...",
		proceed_to_registration: "ดำเนินการลงทะเบียน",
		back_to_home: "กลับสู่หน้าหลัก",
		registration_form: "แบบฟอร์มลงทะเบียน",
		personal_information: "ข้อมูลส่วนตัว",
		guest_information: "ข้อมูลผู้เยี่ยมเยือน",
		travel_documents: "เอกสารการเดินทาง",
		travel_information: "ข้อมูลการเดินทาง",
		name: "ชื่อ",
		address: "ที่อยู่",
		occupation: "อาชีพ",
		report_date: "วันที่รายงาน",
		report_time: "เวลารายงาน",
		guest_name: "ชื่อผู้เยี่ยมเยือน",
		guest_address: "ที่อยู่ผู้เยี่ยมเยือน",
		nationality: "สัญชาติ",
		place_of_birth: "สถานที่เกิด",
		date_of_birth: "วันเกิด",
		profession: "อาชีพ",
		passport_number: "หมายเลขหนังสือเดินทาง",
		passport_expiry: "วันหมดอายุหนังสือเดินทาง",
		issued_by: "ออกโดย",
		visa_type: "ประเภทวีซ่า",
		visa_duration: "ระยะเวลาวีซ่า",
		arrival_date: "วันที่เดินทางมาถึง",
		arrival_from: "เดินทางมาจาก",
		purpose_of_visit: "วัตถุประสงค์ของการเยี่ยมเยือน",
		departure_date: "วันที่เดินทางออก",
		next_destination: "จุดหมายต่อไป",
		next_country: "ประเทศต่อไป",
		city_in_indonesia: "เมืองในอินโดนีเซีย",
		previous: "ก่อนหน้า",
		next: "ถัดไป",
		submit_registration: "ส่งการลงทะเบียน",
		enter_name: "กรอกชื่อของคุณ",
		enter_address: "กรอกที่อยู่ของคุณ",
		enter_occupation: "กรอกอาชีพของคุณ",
		select_date: "เลือกวันที่",
		select_time: "เลือกเวลา",
		name_info: "กรอกชื่อเต็มของคุณตามที่ปรากฏในเอกสารทางการ",
		passport_number_info:
			"หมายเลขหนังสือเดินทางของคุณสามารถพบได้ในหน้าหลักของหนังสือเดินทาง",
		visa_type_info: "เลือกประเภทวีซ่าที่คุณกำลังสมัครหรือถือครองอยู่",
		document_scanning: "การสแกนเอกสาร",
		scanning: "กำลังสแกน",
		capture_image: "ถ่ายภาพ",
		upload_document: "อัปโหลดเอกสาร",
		or: "หรือ",
		processing: "กำลังประมวลผล...",
		capture_success: "ถ่ายภาพสำเร็จ",
		image_blurry_retake: "ภาพไม่ชัด กรุณาถ่ายใหม่",
		align_document_guide: "จัดวางเอกสารให้อยู่ในกรอบสีเขียว",
		camera_access_error:
			"เกิดข้อผิดพลาดในการเข้าถึงกล้อง กรุณาตรวจสอบการอนุญาต",
		ktp: "บัตรประจำตัวประชาชน",
		passport: "หนังสือเดินทาง",
		visa: "วีซ่า / อี-วีซ่า",
		itk: "บัตรอนุญาตพำนักชั่วคราว",
		image_blurry_warning: "ภาพดูเหมือนจะไม่ชัด คุณอาจต้องการถ่ายใหม่",
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
