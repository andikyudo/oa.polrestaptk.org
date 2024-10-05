import Link from "next/link";

export default function TermsAndConditions() {
	return (
		<div className='min-h-screen bg-gray-100 p-4'>
			<main className='container mx-auto max-w-2xl'>
				<h1 className='text-3xl font-bold text-center text-blue-800 mb-8'>
					Terms and Conditions
				</h1>
				<div className='bg-white shadow-md rounded-lg p-6'>
					<h2 className='text-xl font-semibold mb-4 text-gray-700'>
						Foreign Visitor Service Regulations
					</h2>
					<div className='prose mb-6'>
						<p>
							[Placeholder for terms and conditions content. This will be
							updated later.]
						</p>
					</div>
					<div className='flex flex-col space-y-4'>
						<Link
							href='/form'
							className='w-full bg-green-600 text-white text-center py-2 px-4 rounded-md hover:bg-green-700 transition duration-300'
						>
							Proceed to Registration Form
						</Link>
						<Link
							href='/'
							className='w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300'
						>
							Back to Home
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
}
