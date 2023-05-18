import React from 'react';
import Image from 'next/image';

export default function ContactPage() {
	return (
		<article className='contact'>
			<div className='contact_description'>
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
			<div className=' contact_option-message'>
				<form action='' className='contact_form'>
					<input type='text' name='name' className='contact_input' />
					<input type='email' name='email' className='contact_input' />
					<textarea
						name='message'
						id=''
						cols='30'
						rows='10'
						className='contact_input contact_area'
					></textarea>
					<button type='button' className='contact_btn btn'>
						send message
					</button>
				</form>
				<div className='contact_media'>
					<div className='media'>
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
					<div className='media'>
						<div>
							<Image
								src='/ic_outline-whatsapp.svg'
								alt='whatsApp icon'
								width={64}
								height={64}
							/>

							<p>WhatsApp</p>
							<p>(+509) 4657-8228</p>
						</div>

						<a href=''> send a message</a>
					</div>
				</div>
			</div>
		</article>
	);
}
