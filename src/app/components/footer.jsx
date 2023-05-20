import styles from './about.module.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_sitemap}>
				<button className={`btn ${styles.btn_contact}`}>
					<Link href='/about/contact'>contact me</Link>
				</button>

				<div className={`${styles.home_social_icon} ${styles.footer_social}`}>
					<a href='https://www.linkedin.com/in/sarilusblaise/' target='_blank'>
						<Image
							src='/linkedin.svg'
							alt='pc-hero'
							width={32}
							height={32}
						></Image>
					</a>
					<a href='https://github.com/sarilusblaise' target='_blank'>
						<Image
							src='/github_icon.svg'
							alt='pc-hero'
							width={32}
							height={32}
						></Image>
					</a>
					<a href='https://twitter.com/sarilusblaise' target='_blank'>
						<Image
							src='/twitter_icon.svg'
							alt='pc-hero'
							width={32}
							height={32}
						></Image>
					</a>
					<a href='https://www.hackerrank.com/sarilusblaise' target='_blank'>
						<Image
							src='/hackerRank_icon.svg'
							alt='pc-hero'
							width={32}
							height={32}
						></Image>
					</a>
				</div>
			</div>
			<p>©2023 Designed By Sarilus Blaise | All Rights Reserved.</p>
		</footer>
	);
}
