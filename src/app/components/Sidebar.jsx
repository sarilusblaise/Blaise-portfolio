import styles from './about.module.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Sidebar() {
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
				<li className={styles.sidebar_menu_item}>
					<Link href='/'>
						<p>Home</p>{' '}
					</Link>
				</li>
				<li className={styles.sidebar_menu_item}>
					<Link href='/about/bio'>
						<p>About</p>
					</Link>
				</li>
				<li className={styles.sidebar_menu_item}>
					<Link href='/about/projects'>
						{' '}
						<p>Projects</p>
					</Link>
				</li>
				<li className={styles.sidebar_menu_item}>
					<Link href='/about/contact'>
						{' '}
						<p>Contact</p>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
