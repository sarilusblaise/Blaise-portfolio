import React from 'react';
import Image from 'next/image';
export default function Footer() {
	return (
		<footer className='footer'>
			<button className='btn btn-contact'>contact me</button>
			<div className='home_social'>
				<div className='home_social-icon'>
					<a href=''>
						<Image
							src='/linkedin.svg'
							alt='pc-hero'
							width={32}
							height={32}
						></Image>
					</a>
					<a href=''>
						<Image
							src='/github_icon.svg'
							alt='pc-hero'
							width={32}
							height={32}
						></Image>
					</a>
					<a href=''>
						<Image
							src='/twitter_icon.svg'
							alt='pc-hero'
							width={32}
							height={32}
						></Image>
					</a>
					<a href=''>
						<Image
							src='/hackerRank_icon.svg'
							alt='pc-hero'
							width={32}
							height={32}
						></Image>
					</a>
				</div>
				<p>©2023 Designed By Sarilus Blaise. All Rights Reserved.</p>
			</div>
		</footer>
	);
}
