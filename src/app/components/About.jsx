import styles from './about.module.css';
import React from 'react';
import Skills from './Skills';
import { stackObject } from './Skills';
export default function HomeAbout() {
	return (
		<section className={styles.home_about}>
			<h4>
				About <span>Me</span>
			</h4>
			<div className={styles.home_about_description}>
				<h5>about</h5>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id assumenda
					cupiditate pariatur rerum deserunt, iusto, maiores veniam illum
					asperiores nam iure laudantium. Nemo alias officia labore, distinctio
					ullam aut beatae pariatur fugit porro. Omnis necessitatibus unde eius
					reiciendis, eos ex, aut quidem mollitia aspernatur suscipit quaerat
					nisi excepturi quasi. Officia, laudantium! Facilis laboriosam ratione
					quisquam nulla, voluptatum possimus accusamus minus esse vero eum
					velit praesentium ducimus. In molestiae magni quidem, eaque, debitis
					illum natus sequi tempore, deserunt cum quo vitae iusto vel dicta
					ipsum aliquam! Accusamus natus veniam cupiditate id esse, tempora
					aspernatur eum nesciunt. Eum molestias doloribus quod, vel officia
					magnam nobis qui quis fugiat ex, deleniti impedit harum officiis cum
					aperiam inventore error itaque suscipit in consequuntur corrupti! At
					itaque ipsa quos quod, quis veniam ut, voluptatibus debitis ducimus
					impedit ea veritatis laudantium recusandae animi obcaecati,
					consequuntur quia aut quas reiciendis earum magni illum fugiat. Sunt
					iste placeat quae a provident, consequatur architecto facere
					molestiae. Magnam aperiam excepturi praesentium in dolore eius,
					aspernatur quis maxime cumque ut optio, repellendus ipsa quia eos
					ipsum beatae repudiandae! Magni dolores, quasi nesciunt fugit, nulla
					similique ad voluptatem ullam laboriosam quidem quo asperiores!
					Similique aliquam odio sapiente perspiciatis esse! Vero velit
					doloremque reiciendis sequi laboriosam saepe illo voluptatem alias
					nobis assumenda eaque eos, et facilis suscipit quas commodi dolorem
					unde quos nisi quam quod porro in pariatur. Commodi omnis molestias
					cumque dolorem doloremque corrupti nostrum eos dicta reiciendis et
					iusto necessitatibus error, minima, excepturi amet officiis voluptatum
					at deleniti a. Vel, incidunt? <span>read more</span>
				</p>
			</div>
			<Skills stackObject={stackObject} />
		</section>
	);
}
