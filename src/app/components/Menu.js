'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Menu() {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const menuClass = showMenu ? ' menu-container show-menu ' : 'menu-container';

	return (
		<nav className='navbar'>
			<button type='button' className='btn-menu' onClick={toggleMenu}>
				menu <Image src='/arrow.svg' width={15} height={10} />
			</button>
			<div className={menuClass}>
				<button className='btn-close'>
					<Image src='/ic_outline-close.svg' width={32} height={32} />
				</button>

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
