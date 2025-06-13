import React, { useEffect, useState } from 'react';
import '../../index.css';

const BackToTop: React.FC = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setVisible(window.scrollY > 100);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button
			className={`back-to-top-btn${visible ? ' visible' : ''}`}
			onClick={scrollToTop}
			aria-label="Zurück nach oben"
		>
			<img
				src="/img/back-to-top.png"
				alt="Back to top"
				title="Back to top"
				aria-label="Back to top"
				loading="lazy"
				width={40}
				height={40}
				srcSet="/img/back-to-top.png 1x, /img/back-to-top.png 0.5x"
			/>

		</button>
	);
};

export default BackToTop;
