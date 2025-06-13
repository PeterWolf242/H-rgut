import { useState, useEffect } from 'react';
import './ImageSlider.css';

interface ImageSliderProps {
	images: string[];
}

export default function ImageSlider({ images = [] }: ImageSliderProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (images.length === 0) return;

		const timer = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 5000);

		return () => {
			clearInterval(timer);
		};
	}, [images]);

	const handleDotClick = (index: number) => {
		setCurrentIndex(index);
	};

	const getFileName = (path: string) => {
		const fileName = path.split('/').pop() || '';
		return fileName.replace(/\.[^/.]+$/, '');
	};

	if (images.length === 0) {
		return <></>;
	}

	return (
		<div className="slider">
			{images.map((image, index) => (
				<div
					key={index}
					className={`slide ${index === currentIndex ? 'active' : ''}`}
				>
					<img
						src={image}
						alt={getFileName(image)}
						title={getFileName(image)}
						loading="lazy"
					/>
				</div>
			))}
			<div className="dots">
				{images.map((_, index) => (
					<div
						key={index}
						className={`dot ${index === currentIndex ? 'active' : ''}`}
						onClick={() => handleDotClick(index)}
					/>
				))}
			</div>
		</div>
	);
}
