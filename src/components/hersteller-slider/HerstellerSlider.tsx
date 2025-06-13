import React, { useState, useEffect, useRef } from 'react';
import './HerstellerSlider.css';
import { images } from '../../interfaces/herstellerLogo';

const AUTO_SLIDE_INTERVAL = 3000;

const HerstellerSlider: React.FC = () => {
	const [current, setCurrent] = useState(0);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const nextSlide = () => {
		setCurrent((prev) => (prev + 1) % images.length);
	};

	const prevSlide = () => {
		setCurrent((prev) => (prev - 1 + images.length) % images.length);
	};

	useEffect(() => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(nextSlide, AUTO_SLIDE_INTERVAL);
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
				timeoutRef.current = null;
			}
		};
	}, [current]);

	// Nur die drei zu rendernden Slides berechnen
	const prevIndex = (current - 1 + images.length) % images.length;
	const nextIndex = (current + 1) % images.length;

	return (
		<div className="hersteller-slider-full-container">
			<div className="hersteller-slider-flex">
				{[prevIndex, current, nextIndex].map((idx) => {
					let position = 'next';
					if (idx === current) position = 'active';
					if (idx === prevIndex) position = 'prev';

					const img = images[idx];

					return (
						<div
							className={`hersteller-slider-img-container ${position}`}
							key={img.src}
						>
							<img
								src={img.src}
								alt={img.title}
								title={img.title}
								aria-label={img.ariaLabel}
								loading="lazy"
								className="hersteller-slider-img-full"
								width={600}
								height={200}
							/>
						</div>
					);
				})}
			</div>
			<div
				className="hersteller-slider-buttons"
				role="group"
				aria-label="Navigation durch Herstellerlogos"
			>
				<button type="button" onClick={prevSlide} role="button" aria-label="Vorheriges Logo anzeigen">
					<svg aria-hidden="true"
						focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM215 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L392 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-214.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L103 273c-9.4-9.4-9.4-24.6 0-33.9L215 127z" /></svg>
				</button>
				<button type="button" onClick={nextSlide} role="button" aria-label="Nächstes Logo anzeigen">
					<svg aria-hidden="true"
						focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z" /></svg>
				</button>
			</div>
		</div>
	);
};

export default HerstellerSlider;
