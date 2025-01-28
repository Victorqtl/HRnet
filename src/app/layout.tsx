import type { Metadata } from 'next';
import './globals.css';
import { EmployeeProvider } from '@/context/EmployeeContext';

export const metadata: Metadata = {
	title: 'HRnet',
	description: 'Create Employee',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='bg-hero-background'>
				<EmployeeProvider>{children}</EmployeeProvider>
			</body>
		</html>
	);
}
