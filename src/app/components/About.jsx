import styles from './about.module.css';
import React from 'react';
import Skills from './Skills';
import { stackObject } from './Skills';
export default function AboutBio() {
	return (
		<section className={styles.home_about}>
			<h4>
				About <span>Me</span>
			</h4>
			<div className={styles.home_about_description}>
				<h5>about</h5>
				<p>
					I am a full-stack web developer with strong knowledge in JavaScript,
					React, NodeJS, Python, and MySQL. I finished my civil engineering
					degree but since the fourth year of my studies, I have dedicated
					myself to getting serious about programming after using Python a few
					times to do homework. This is how my passion for programming started
					to develop.
				</p>
				<p>
					One of the main reasons I got into programming is that I love
					constantly learning new things and the challenges that this field
					requires every day. I feel like it gives me a reason to make every day
					of my life meaningful and keeps me busy doing things I'm passionate
					about.
				</p>

				<p>
					My civil engineering background has given me a strong background in
					mathematics, which has allowed me to learn more quickly data
					structures and algorithms, which are fundamental and crucial skills in
					computer science. I am also constantly solving coding challenges on
					HackerRank that keep me active in my web development journey. I am a
					volunteer logistics manager in an association in my community. I've
					built a few small applications and contributed to others. I strive to
					improve myself every day and work to become the best developer I can
					be.
				</p>

				<p>
					Although a large part of my life is dedicated to programming, I try to
					balance it with other activities. In my spare time, I enjoy playing
					chess, soccer, working out, and most importantly, spending quality
					time with my loved ones.
				</p>
			</div>
			<Skills stackObject={stackObject} />
		</section>
	);
}
