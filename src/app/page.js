import Image from 'next/image';
import HomeFooter from './components/HomeFooter';
import HomeAbout from './components/HomeAbout';
import Menu from './components/Menu';
import Link from 'next/link';
import HomeProjectsList from './components/HomeProjectList';
export default function HomePage() {
	return (
		<>
			<main>
				{/* =====================hero section======================*/}
				<section className='home_hero'>
					<div className='home_description'>
						<h4>
							Sarilus<span> Blondy Wadley</span>
						</h4>

						<Image
							src='/pc-hero.svg'
							alt='pc-hero'
							className='home_description-image'
							width={200}
							height={200}
						/>
					</div>
					<div className='home_social'>
						<h5>full-stack developer</h5>
						<div className='home_social-icon'>
							<a
								href='https://www.linkedin.com/in/sarilusblaise/'
								target='_blank'
							>
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
							<a
								href='https://www.hackerrank.com/sarilusblaise'
								target='_blank'
							>
								<Image
									src='/hackerRank_icon.svg'
									alt='pc-hero'
									width={32}
									height={32}
								></Image>
							</a>
						</div>
						<button className='btn'>
							<Link href='/about/projects'> see my works</Link>
						</button>
					</div>
				</section>

				{/* ===============about section=================*/}
				<HomeAbout />
				{/* ===============project section=================*/}
				<HomeProjectsList />
			</main>
			<HomeFooter />
		</>
	);
}
