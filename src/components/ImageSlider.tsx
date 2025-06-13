import { useState } from 'react';
import './ImageSlider.css';

interface ImageSliderProps {
	images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const goToNext = () => {
		const isLastSlide = currentIndex === images.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className="slider-container">
			<button
				className="slider-button prev"
				onClick={goToPrevious}
				aria-label="Vorheriges Bild"
			>
				←
			</button>
			{images.map((image) => {
				const uniqueKey = `slider-${image}`;
				return (
					<div
						key={uniqueKey}
						className={`slide ${currentIndex === images.indexOf(image) ? 'active' : ''}`}
					>
						<img
							src={image}
							alt="Slider Bild"
							title="Slider Bild"
							aria-label="Slider Bild"
							loading="lazy"
						/>
					</div>
				);
			})}
			<button
				className="slider-button next"
				onClick={goToNext}
				aria-label="Nächstes Bild"
			>
				→
			</button>
		</div>
	);
}
