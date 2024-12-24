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
			<body>{children}</body>
		</html>
	);
}
