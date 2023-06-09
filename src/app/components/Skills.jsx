export const stackObject = {
	frontend: {
		name: 'frontend',
		stacks: ['JavaScript', 'React', 'CSS', 'Tailwind', 'Sass', 'HTML'],
	},
	backend: {
		name: 'backend',
		stacks: ['NodeJs', 'Express', 'Next', 'MySQL', 'MongoDB'],
	},
	tools: { name: 'tools', stacks: ['Git', 'GitHub', 'Vite', 'Figma'] },
};

//for creating specific stack lis
function StackList({ stackArr }) {
	const { name, stacks } = stackArr;
	return (
		<div className='home_skills'>
			<h6>{name}</h6>
			<div>
				{stacks.map((stack, index) => (
					<div className='skills' key={name}>
						<p>{stack}</p>
					</div>
				))}
			</div>
		</div>
	);
}
export default function Skills({ stackObject }) {
	const { frontend, backend, tools } = stackObject;

	return (
		<div className='home_about-skills'>
			<h5>tech stack skills</h5>
			<div className='home_skills-container'>
				<StackList stackArr={frontend} />
				<StackList stackArr={backend} />
				<StackList stackArr={tools} />
			</div>
		</div>
	);
}
