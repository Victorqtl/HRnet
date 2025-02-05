'use client';

import { DataTable } from 'my-hrnet-data-table';
import { Progress } from '@/components/ui/progress';
import { useEmployeeContext } from '@/context/EmployeeContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Employees() {
	const { employees, isLoading, editEmployee, deleteEmployee } = useEmployeeContext();
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		if (isLoading) {
			setProgress(0);

			const progressInterval = setInterval(() => {
				setProgress(prevProgress => {
					if (prevProgress < 90) {
						return prevProgress + 10;
					}
					return prevProgress;
				});
			}, 50);

			return () => clearInterval(progressInterval);
		} else {
			setProgress(100);
		}
	}, [isLoading]);

	if (isLoading)
		return (
			<div className='h-screen flex justify-center items-center'>
				<Progress
					value={progress}
					className='w-[20%]'
				/>
			</div>
		);

	return (
		<main>
			<div className='flex flex-col items-center gap-4 mt-4 mb-4'>
				<h1 className='text-6xl font-semibold text-[#011f46]'>HRnet</h1>
				<h2 className='text-xl font-medium'>Current Employees :</h2>
			</div>
			<div className='flex flex-col items-center gap-4'>
				<DataTable
					data={employees}
					editEmployee={editEmployee}
					deleteEmployee={deleteEmployee}
				/>
				<Link
					href='/'
					className='text-[#011f46] font-semibold underline'>
					Create Employee
				</Link>
			</div>
		</main>
	);
}
