import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Sarilus Blaise Portfolio',
	description: 'Sarilus Blondy Wadley | Full-Stack Developer',
	keywords:
		'web development, web design, javascript, react, node, angular, vue, html, css',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
