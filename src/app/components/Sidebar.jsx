'use client';
import styles from './about.module.css';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const linkList = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about/bio' },
	{ name: 'Projects', href: '/about/projects' },
	{ name: 'Contact', href: '/about/contact' },
];
export default function Sidebar() {
	const pathname = usePathname();
	return (
		<nav className={styles.sidebar}>
			<div className={styles.sidebar_bio}>
				<Image
					src='/profile_image.jpg'
					className={styles.sidebar_avatar}
					width={200}
					height={200}
				/>
				<div className={styles.sidebar_description}>
					<p>SARILUS BLONDY WADLEY</p>
					<p>Full-Stack Developer</p>
				</div>
			</div>
			<ul className={styles.sidebar_list}>
				{linkList.map((link) => {
					const isActive = pathname === link.href;
					return (
						<li
							key={link.name}
							className={`${isActive ? styles.sidebar_active_link : ''}`}
						>
							<Link href={link.href}>
								<p>{link.name}</p>{' '}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
