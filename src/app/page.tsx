'use client';

import Link from 'next/link';
import { Button } from 'react-day-picker';
import EmployeeForm from '@/components/employeeForm';

export default function Page() {
	return (
		<main>
			<div className='flex flex-col items-center gap-4 mt-4 mb-4'>
				<h1 className='text-6xl font-bold'>HRnet</h1>
				<h2 className='text-xl font-medium'>Create Employee :</h2>
			</div>
			<EmployeeForm />
			<div className='w-max mt-4 mx-auto'>
				<Link
					href='/employees'
					className='text-[#011f46] font-semibold underline'>
					View Current Employees
				</Link>
			</div>
		</main>
	);
}
