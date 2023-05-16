import './globals.css';

import Footer from './components/Footer';
import Menu from './components/Menu';
export const metadata = {
	title: 'Sarilus Blaise Portfolio',
	description: 'Sarilus Blondy Wadley | Full-Stack Developer',
	keywords:
		'web development, web design, javascript, react, node, angular, vue, html, css',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				{/*==================nav bar================*/}
				<Menu />
				{children}
				<Footer />
			</body>
		</html>
	);
}
