import React, { useState, useRef, useEffect, useCallback } from "react";
import Compressor from "compressorjs";
import { Camera, Upload, Loader, Check, X } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import Image from "next/image";

interface DocumentScannerProps {
	onScanComplete: (dataUri: string, isBlurry: boolean) => void;
	currentDocument: string;
}

const DocumentScanner: React.FC<DocumentScannerProps> = ({
	onScanComplete,
	currentDocument,
}) => {
	const { t } = useLanguage();
	const [dataUri, setDataUri] = useState<string | null>(null);
	const [isCameraReady, setIsCameraReady] = useState(false);
	const [cameraError, setCameraError] = useState<string | null>(null);
	const [isProcessing, setIsProcessing] = useState(false);
	const [captureStatus, setCaptureStatus] = useState<
		"idle" | "success" | "failed"
	>("idle");
	const videoRef = useRef<HTMLVideoElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const streamRef = useRef<MediaStream | null>(null);

	const startCamera = useCallback(async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				video: {
					facingMode: "environment",
					width: { ideal: 1920 },
					height: { ideal: 1080 },
				},
			});
			if (videoRef.current) {
				videoRef.current.srcObject = stream;
				videoRef.current.onloadedmetadata = () => setIsCameraReady(true);
			}
			streamRef.current = stream;
			setCameraError(null);
		} catch (err) {
			console.error("Error accessing camera:", err);
			setCameraError(t("camera_access_error"));
		}
	}, [t]);

	const resetCamera = useCallback(async () => {
		setDataUri(null);
		setCaptureStatus("idle");
		setIsProcessing(false);
		setIsCameraReady(false);
		if (streamRef.current) {
			streamRef.current.getTracks().forEach((track) => track.stop());
		}
		await startCamera();
	}, [startCamera]); // Add startCamera to the dependency array

	useEffect(() => {
		resetCamera();
		return () => {
			if (streamRef.current) {
				streamRef.current.getTracks().forEach((track) => track.stop());
			}
		};
	}, [resetCamera]);

	const captureDocument = () => {
		if (canvasRef.current && videoRef.current) {
			const canvas = canvasRef.current;
			const video = videoRef.current;
			canvas.width = video.videoWidth;
			canvas.height = video.videoHeight;
			const context = canvas.getContext("2d");
			if (context) {
				context.drawImage(video, 0, 0, canvas.width, canvas.height);
				canvas.toBlob((blob) => {
					if (blob) {
						new Compressor(blob, {
							quality: 0.8,
							success(result) {
								const reader = new FileReader();
								reader.onloadend = () => {
									const dataUri = reader.result as string;
									setDataUri(dataUri);
									const isBlurry = checkBlurry(canvas);
									handleScanComplete(dataUri, isBlurry);
								};
								reader.readAsDataURL(result);
							},
							error(err) {
								console.error("Compression error:", err.message);
								setCaptureStatus("failed");
							},
						});
					}
				}, "image/jpeg");
			}
		}
	};

	const checkBlurry = (canvas: HTMLCanvasElement): boolean => {
		const context = canvas.getContext("2d");
		if (context) {
			const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
			const data = imageData.data;
			let diffSum = 0;
			const len = data.length;

			for (let i = 0; i < len; i += 4) {
				const gray = (data[i] + data[i + 1] + data[i + 2]) / 3;

				if (i > 0) {
					const prevGray = (data[i - 4] + data[i - 3] + data[i - 2]) / 3;
					diffSum += Math.abs(gray - prevGray);
				}
			}

			const diffAvg = diffSum / (len / 4);

			const blurThreshold = 2;
			return diffAvg < blurThreshold;
		}
		return false;
	};

	const handleScanComplete = (dataUri: string, isBlurry: boolean) => {
		setIsProcessing(true);
		// Simulate upload process
		setTimeout(() => {
			setIsProcessing(false);
			if (!isBlurry) {
				setCaptureStatus("success");
				onScanComplete(dataUri, false);
			} else {
				setCaptureStatus("failed");
			}
		}, 2000);
	};

	const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setIsProcessing(true);
			new Compressor(file, {
				quality: 0.8,
				success(result) {
					const reader = new FileReader();
					reader.onloadend = () => {
						const dataUri = reader.result as string;
						setDataUri(dataUri);
						handleScanComplete(dataUri, false); // Assume uploaded images are not blurry
					};
					reader.readAsDataURL(result);
				},
				error(err) {
					console.error("Compression error:", err.message);
					setIsProcessing(false);
					setCaptureStatus("failed");
				},
			});
		}
	};

	const handleCaptureOrRetake = () => {
		if (captureStatus === "failed" || captureStatus === "success") {
			resetCamera();
		} else {
			captureDocument();
		}
	};

	const getButtonStyle = (
		status: "idle" | "processing" | "success" | "failed"
	) => {
		const baseStyle = `
		  w-full px-6 py-3 text-lg font-semibold
		  transition duration-150 ease-in-out
		  transform hover:scale-105 focus:outline-none
		  rounded-lg shadow-md
		  active:shadow-inner active:transform active:translate-y-1
		  focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
		`;

		const colorStyle = {
			idle: "bg-blue-500 hover:bg-blue-600 text-white",
			processing: "bg-yellow-500 hover:bg-yellow-600 text-white",
			success: "bg-green-500 hover:bg-green-600 text-white",
			failed: "bg-red-500 hover:bg-red-600 text-white",
		}[status];

		const shadowColor = {
			idle: "#2563EB",
			processing: "#D97706",
			success: "#059669",
			failed: "#DC2626",
		}[status];

		return {
			className: `${baseStyle} ${colorStyle}`,
			style: {
				boxShadow: `0 6px ${shadowColor}`,
				transform: "translateY(-4px)",
			},
		};
	};

	return (
		<div className='flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl'>
			<h3 className='text-lg font-semibold mb-4 text-center text-gray-800 dark:text-white'>
				{t("scanning")}: {currentDocument}
			</h3>
			<div className='relative w-full aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden mb-4'>
				{cameraError ? (
					<div className='absolute inset-0 flex items-center justify-center text-red-500'>
						<p>{cameraError}</p>
					</div>
				) : !dataUri ? (
					<>
						<video
							ref={videoRef}
							autoPlay
							playsInline
							className='w-full h-full object-cover'
						/>
						<canvas ref={canvasRef} className='hidden' />
						<div className='absolute inset-0 border-4 border-green-500 opacity-50 pointer-events-none'></div>
						<p className='absolute bottom-4 left-0 right-0 text-center text-white bg-black bg-opacity-50 py-2'>
							{t("align_document_guide")}
						</p>
					</>
				) : (
					<Image
						src={dataUri}
						alt='captured'
						layout='fill'
						objectFit='cover'
						className='rounded-lg'
					/>
				)}
			</div>

			<div className='mt-8 space-y-4 w-full'>
				<button
					onClick={handleCaptureOrRetake}
					disabled={isProcessing || !isCameraReady}
					{...getButtonStyle(
						isProcessing
							? "processing"
							: captureStatus === "success"
							? "success"
							: captureStatus === "failed"
							? "failed"
							: "idle"
					)}
				>
					{isProcessing ? (
						<Loader className='animate-spin mr-2 h-5 w-5 inline' />
					) : captureStatus === "success" ? (
						<Check className='mr-2 h-5 w-5 inline' />
					) : captureStatus === "failed" ? (
						<X className='mr-2 h-5 w-5 inline' />
					) : (
						<Camera className='mr-2 h-5 w-5 inline' />
					)}
					{isProcessing
						? t("processing")
						: captureStatus === "success"
						? t("capture_next")
						: captureStatus === "failed"
						? t("image_blurry_retake")
						: t("capture_image")}
				</button>

				<div className='text-center text-sm text-gray-500 dark:text-gray-400'>
					{t("or")}
				</div>

				<label
					{...getButtonStyle("idle")}
					className={`${
						getButtonStyle("idle").className
					} cursor-pointer flex items-center justify-center`}
				>
					<input
						type='file'
						className='hidden'
						onChange={handleUpload}
						accept='image/*'
					/>
					<Upload className='mr-2 h-5 w-5' />
					{t("upload_document")}
				</label>
			</div>
		</div>
	);
};

export default DocumentScanner;
