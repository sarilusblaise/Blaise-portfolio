import Image from 'next/image';
export default function HomePage() {
	return (
		<main>
			<div className='home_hero'>
				<h4>Sarilus blondy wadley</h4>
				<Image
					src='/pc-hero.svg'
					alt='pc-hero'
					width={159}
					height={113}
				></Image>
				<h5>full-satck developer</h5>
			</div>
		</main>
	);
}
