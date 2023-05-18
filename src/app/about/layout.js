import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function layout({ children }) {
	return (
		<div className='layoutAbout'>
			<Sidebar />
			{children}
			<Footer />
		</div>
	);
}
