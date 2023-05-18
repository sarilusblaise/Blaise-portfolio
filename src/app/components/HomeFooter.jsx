import React from 'react';
import Image from 'next/image';
export default function HomeFooter() {
	return (
		<footer className='footer'>
			<div className='footer_sitemap'>
				<button className='btn btn-contact'>contact me</button>

				<div className='home_social-icon footer_social'>
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
			</div>
			<p>©2023 Designed By Sarilus Blaise | All Rights Reserved.</p>
		</footer>
	);
}
