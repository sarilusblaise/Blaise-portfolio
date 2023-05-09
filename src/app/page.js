import Image from 'next/image';
import Skills from './components/Skills';
export default function HomePage() {
	return (
		<main>
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
			<section className='home_about'>
				<h5>About me</h5>
				<div className='home_about-paragraph'>
					<h6>about</h6>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
						assumenda cupiditate pariatur rerum deserunt, iusto, maiores veniam
						illum asperiores nam iure laudantium. Nemo alias officia labore,
						distinctio ullam aut beatae pariatur fugit porro. Omnis
						necessitatibus unde eius reiciendis, eos ex, aut quidem mollitia
						aspernatur suscipit quaerat nisi excepturi quasi. Officia,
						laudantium! Facilis laboriosam ratione quisquam nulla, voluptatum
						possimus accusamus minus esse vero eum velit praesentium ducimus. In
						molestiae magni quidem, eaque, debitis illum natus sequi tempore,
						deserunt cum quo vitae iusto vel dicta ipsum aliquam! Accusamus
						natus veniam cupiditate id esse, tempora aspernatur eum nesciunt.
						Eum molestias doloribus quod, vel officia magnam nobis qui quis
						fugiat ex, deleniti impedit harum officiis cum aperiam inventore
						error itaque suscipit in consequuntur corrupti! At itaque ipsa quos
						quod, quis veniam ut, voluptatibus debitis ducimus impedit ea
						veritatis laudantium recusandae animi obcaecati, consequuntur quia
						aut quas reiciendis earum magni illum fugiat. Sunt iste placeat quae
						a provident, consequatur architecto facere molestiae. Magnam aperiam
						excepturi praesentium in dolore eius, aspernatur quis maxime cumque
						ut optio, repellendus ipsa quia eos ipsum beatae repudiandae! Magni
						dolores, quasi nesciunt fugit, nulla similique ad voluptatem ullam
						laboriosam quidem quo asperiores! Similique aliquam odio sapiente
						perspiciatis esse! Vero velit doloremque reiciendis sequi laboriosam
						saepe illo voluptatem alias nobis assumenda eaque eos, et facilis
						suscipit quas commodi dolorem unde quos nisi quam quod porro in
						pariatur. Commodi omnis molestias cumque dolorem doloremque corrupti
						nostrum eos dicta reiciendis et iusto necessitatibus error, minima,
						excepturi amet officiis voluptatum at deleniti a. Vel, incidunt?{' '}
						<span>read more</span>
					</p>
				</div>
				<div className='home_about-skills'>
					<h6>tech stack skills</h6>
					<div className='home_skills-container'>
						<div className='home_skills'>
							<h6>frontend</h6>
							<div>
								<Skills>
									<p>JavaScript</p>{' '}
								</Skills>
								<Skills>
									<p> CSS</p>
								</Skills>
								<Skills>
									<p>Tailwind CSS</p>{' '}
								</Skills>
								<Skills>
									<p>HTML</p>
								</Skills>
								<Skills>
									<p>React</p>
								</Skills>
							</div>
						</div>
						<div className='home_skills'>
							<h6>backend</h6>
							<div></div>
						</div>
						<div className='home_skills'>
							<h6>Tools</h6>
							<div></div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
