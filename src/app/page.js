import Image from 'next/image';
import HomeAbout from './components/HomeAbout';
import Link from 'next/link';
import ProjectsList from './components/ProjectsList';
export default function HomePage() {
	return (
		<main>
			{/*==================nav bar================*/}
			<nav className='navbar'>
				<button type='button' className='btn-menu'>
					menu <Image src='/arrow.svg' width={15} height={10} />
				</button>
				<div></div>
			</nav>
			{/* =====================hero section======================*/}
			<section className='home_hero'>
				<div className='home_description'>
					<h4>Sarilus blondy wadley</h4>
					<Image
						src='/pc-hero.svg'
						alt='pc-hero'
						width={200}
						height={200}
					></Image>
					<h5>full-stack developer</h5>
				</div>
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
					<button className='btn'>see my works</button>
				</div>
			</section>

			{/* ===============about section=================*/}
			<HomeAbout />
			{/* ===============project section=================*/}
			<ProjectsList />
		</main>
	);
}
