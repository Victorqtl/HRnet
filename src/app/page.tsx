import Link from 'next/link';

export default function Page() {
	return (
		<main>
			<div className='flex flex-col items-center gap-4 mt-4'>
				<h1>HRnet</h1>
				<Link href='/employees'>View Current Employees</Link>
				<h2>Create Employee</h2>
			</div>
		</main>
	);
}
