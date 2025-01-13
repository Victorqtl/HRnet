import type { Metadata } from 'next';
import './globals.css';

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
			<body className='bg-hero-background'>{children}</body>
		</html>
	);
}
