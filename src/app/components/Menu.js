'use client';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Menu() {
	const [showMenu, setShowMenu] = useState(false);
	const menuRef = useRef(null);

	const menuClass = showMenu ? ' menu-container show-menu ' : 'menu-container';
	const menuIconClass = showMenu ? ' hideMenu-icon ' : '';

	useEffect(() => {
		const closeMenu = (e) => {
			if (
				e.target.classList.contains('btn-menu') ||
				e.target.classList.contains('menu-icon')
			) {
				if (menuRef.current.classList.contains('show-menu')) {
					setShowMenu(false);
				} else {
					setShowMenu(true);
				}
			} else {
				setShowMenu(false);
			}
		};

		// Add event listener to window object
		window.addEventListener('click', closeMenu);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('click', closeMenu);
		};
	}, []);

	return (
		<nav className='navbar'>
			<button type='button' className='btn-menu'>
				menu
				<Image
					src='/arrow.svg'
					className={`menu-icon ${menuIconClass}`}
					width={15}
					height={10}
				/>
			</button>
			<div className={menuClass} ref={menuRef}>
				<ul className='menu-list'>
					<li className='menu-item'>
						<Link href='/'>Home</Link>
					</li>
					<li className='menu-item'>
						<Link href='/about/bio'>About</Link>
					</li>
					<li className='menu-item'>
						<Link href='/about/projects'>Projects</Link>
					</li>
					<li className='menu-item'>
						<Link href='/about/contact'>Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
