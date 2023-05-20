import styles from './about.module.css';
import { projectsData } from './ProjectData';
import React from 'react';
import Image from 'next/image';

export default function ProjectsList() {
	return (
		<section className={styles.home_projects}>
			<h4>
				<span>My</span> Projects
			</h4>
			<p className={styles.projects_intro}>
				I have a passion for building robust, user-friendly applications that
				solve real-world problems. Each project listed here represents a unique
				challenge that I was able to tackle with my skills and expertise using a
				various of technologies.
			</p>
			<div className={styles.projects_container}>
				{projectsData.map((project) => {
					const { name, description, image, alt, source, demo } = project;
					return (
						<div className={styles.projects}>
							<Image
								className={styles.projects_image}
								src={image}
								width={500}
								height={500}
								alt={alt}
							></Image>
							<div className={styles.projects_info}>
								<div className={styles.projects_description}>
									<h5>{name}</h5>
									<p>{description}</p>
								</div>
								<div className={styles.projects_source}>
									<div>
										<div>
											<a href={source} target='_blank '>
												<Image
													src='/github_icon.svg'
													alt='github icon'
													width={64}
													height={64}
												/>
											</a>
										</div>

										<p>code</p>
									</div>
									<div>
										<div>
											<a href={demo} target='_blank'>
												<Image
													src='/web.svg'
													alt='web icon'
													width={64}
													height={64}
												/>
											</a>
										</div>

										<p>demo</p>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
