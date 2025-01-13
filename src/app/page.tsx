'use client';

import Link from 'next/link';
import EmployeeForm from '@/components/employeeForm';

export default function Page() {
	return (
		<main>
			<div className='flex flex-col items-center gap-4 mt-4 mb-4'>
				<h1 className='text-6xl font-semibold text-[#011f46]'>HRnet</h1>
				<h2 className='text-xl font-medium'>Create Employee :</h2>
			</div>
			<div className='flex flex-col items-center gap-4 w-fit mx-auto p-6 sm:p-8 border border-[#011f46] rounded-2xl shadow-lg bg-white'>
				<EmployeeForm />
				<Link
					href='/employees'
					className='text-[#011f46] font-semibold underline'>
					View Current Employees
				</Link>
			</div>
		</main>
	);
}
