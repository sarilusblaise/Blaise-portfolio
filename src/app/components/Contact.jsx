import styles from './about.module.css';
import React from 'react';

import Image from 'next/image';
export default function Contact() {
	return (
		<article className={styles.contact}>
			<div className={styles.contact_description}>
				<h4>
					Contact <span>Me</span>
				</h4>
				<p>
					I'm currently looking for new opportunities to work on exciting
					projects and contribute my skills to a dynamic and innovative team. If
					you're interested in learning more about me and my work, please don't
					hesitate to get in touch!
				</p>
			</div>
			<div className={styles.contact_option_message}>
				<form action='' className='contact_form'>
					<input
						type='text'
						name='name'
						className={styles.contact_input}
						placeholder='Name *'
					/>
					<input
						type='email'
						name='email'
						className={styles.contact_input}
						placeholder='Email *'
					/>
					<textarea
						name='message'
						id=''
						cols='30'
						rows='10'
						className={styles.contact_input}
						placeholder='Message *'
					></textarea>
					<button type='button' className={`${styles.contact_btn} btn`}>
						send message
					</button>
				</form>
				<div className={styles.contact_media}>
					<div className={styles.media}>
						<div>
							<Image
								src='/material-symbols_mail-outline.svg'
								alt='email icon'
								width={64}
								height={64}
							/>

							<p>Email</p>
							<p>sarilusblondywadley@gmail.com</p>
						</div>

						<a href=''> send a message</a>
					</div>
					<div className={styles.media}>
						<div>
							<Image
								src='/ic_outline-whatsapp.svg'
								alt='whatsApp icon'
								width={64}
								height={64}
							/>

							<p>WhatsApp</p>
							<p>(+509)4657-8228</p>
						</div>

						<a href=''> send a message</a>
					</div>
				</div>
			</div>
		</article>
	);
}
