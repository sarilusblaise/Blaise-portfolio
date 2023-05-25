import './globals.css';
import Head from 'next/head';
import { Suspense } from 'react';
import LoadingPage from './loading';
import Menu from './components/Menu';
export const metadata = {
	title: 'SARILUS BLONDY WADLEY - Portfolio | Fullstack Web Developer',
	description: 'Sarilus Blondy Wadley | Full-Stack Developer',
	keywords:
		' Sarilus ,Blondy, Wadley, Balise ,web development, web design, javascript, react, node, html, css, frontend developer,backend developer,programming, react developer',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				{/*==================nav bar================*/}
				<Suspense fallback={<LoadingPage />}>
					<Menu />
					{children}
				</Suspense>
			</body>
		</html>
	);
}
