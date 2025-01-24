'use client';

import { DataTable } from 'my-hrnet-data-table';
import { useFormDataContext } from '@/context/FormDataContext';
import Link from 'next/link';

export default function Employees() {
	const { data } = useFormDataContext()!;
	return (
		<main>
			<div className='flex flex-col items-center gap-4 mt-4 mb-4'>
				<h1 className='text-6xl font-semibold text-[#011f46]'>HRnet</h1>
				<h2 className='text-xl font-medium'>Current Employees :</h2>
			</div>
			<div className='flex flex-col items-center gap-4'>
				<DataTable data={data} />
				<Link
					href='/'
					className='text-[#011f46] font-semibold underline'>
					Create Employee
				</Link>
			</div>
		</main>
	);
}
