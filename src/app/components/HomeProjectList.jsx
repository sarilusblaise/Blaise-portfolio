import { projectsData } from './ProjectData';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeProjectsList() {
	return (
		<section className='home_projects'>
			<h4>
				<span>My</span> Projects
			</h4>
			<p className='projects_intro'>
				I have a passion for building robust, user-friendly applications that
				solve real-world problems. Each project listed here represents a unique
				challenge that I was able to tackle with my skills and expertise using a
				various of technologies.
			</p>
			<div className='projects-container'>
				{projectsData.slice(0, 3).map((project) => {
					const { name, description, image, alt } = project;
					return (
						<div className='projects'>
							<Image
								className='projects_image'
								src={image}
								width={500}
								height={500}
								alt={alt}
							></Image>
							<div className='projects_info'>
								<div className='projects_description'>
									<h5>{name}</h5>
									<p>{description}</p>
								</div>
								<div className='projects_source'>
									<div>
										<div>
											<Image
												src='/github_icon.svg'
												alt='github icon'
												width={64}
												height={64}
											></Image>
										</div>

										<p>code</p>
									</div>
									<div>
										<div>
											<Image
												src='/web.svg'
												alt='web icon'
												width={64}
												height={64}
											></Image>
										</div>

										<p>demo</p>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<p className='projects_link'>
				<Link href='/about/projects'>All projects</Link>
			</p>
		</section>
	);
}
