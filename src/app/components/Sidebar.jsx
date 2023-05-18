import styles from './about.module.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Sidebar() {
	return (
		<nav className={styles.sidebar}>
			<div>
				<Image
					src='/profile_image.jpg'
					className='sidebar_avatar'
					width={200}
					height={200}
				/>
				<h6>sarilus blondy Wadley</h6>
				<h6>full stack developer</h6>
				<p>sarilusblondywadley@gmail.com</p>
			</div>
			<div className={styles.sidebar_menu}>
				<ul className={styles.sidebar_list}>
					<li className='styles.sidebar_menu-item'>
						<Link href='/'>Home</Link>
					</li>
					<li className={styles.sidebar_menu_item}>
						<Link href='/about/bio'>About</Link>
					</li>
					<li className={styles.sidebar_menu_item}>
						<Link href='/about/projects'>Projects</Link>
					</li>
					<li className={styles.sidebar_menu_item}>
						<Link href='/about/contact'>Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
