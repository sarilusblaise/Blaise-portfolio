const stackObject = {
	frontend: ['JavaScript', 'CSS', 'Tailwind CSS', 'HTML', 'React'],
	backend: ['NodeJs', 'Express', 'Next', 'MySQL'],
	tools: ['Git', 'GitHub', 'Vite', 'Figma'],
};

export default function Skills({ children }) {
	return <div className='skills'>{children}</div>;
}
