import React from 'react';
import Link from 'next/link';
import Skills from './Skills';
import { stackObject } from './Skills';
export default function HomeAbout() {
	return (
		<section className='home_about'>
			<h4>
				About <span>Me</span>
			</h4>
			<div className='home_about-description'>
				<h5>about</h5>
				<p>
					I am a full-stack web developer with strong knowledge in JavaScript,
					React, NodeJS, Python, and MySQL. I finished my civil engineering
					degree but since the fourth year of my studies, I have dedicated
					myself to getting serious about programming after using Python a few
					times to do homework. This is how my passion for programming started
					to develop. One of the main reasons I got into programming is that I
					love constantly learning new things and the challenges that this field
					requires every day. I feel like it gives me a reason to make every day
					of my life meaningful and keeps me busy doing things I'm passionate
					about.{' '}
					<span>
						<Link href='/about/bio'>Read more</Link>
					</span>
				</p>
			</div>
			<Skills stackObject={stackObject} />
		</section>
	);
}
