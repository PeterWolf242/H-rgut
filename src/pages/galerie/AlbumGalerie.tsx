import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { Aktuelles } from '../../interfaces/aktuelles';
import type { AktuellesNews } from '../../interfaces/aktuellesNew';
import './Galerie.css';
import galerieBilder from '../../assets/galerieBilder.json';

interface AlbumGalerieProps {
	album: Aktuelles | AktuellesNews;
}

export default function AlbumGalerie({ album }: AlbumGalerieProps) {
	if (!album || !album.url) {
		return (
			<main>
				<div className="container">
					<p>Album nicht gefunden</p>
				</div>
			</main>
		);
	}

	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [fade, setFade] = useState(false);
	const [visibleImages, setVisibleImages] = useState(10);
	const fadeTimeout = useRef<NodeJS.Timeout | null>(null);

	// Album-Ordnername extrahieren
	const albumFolder = album.url.split('/').pop() || '';
	const images = (galerieBilder as Record<string, string[]>)[albumFolder] || [];

	// Sicherstellen, dass images ein Array ist
	if (!Array.isArray(images)) {
		console.error('Ungültiges Bildformat für Album:', albumFolder);
		return (
			<main>
				<div className="container">
					<p>Keine Bilder verfügbar</p>
				</div>
			</main>
		);
	}

	const handleImageClick = (index: number) => {
		if (index < 0 || index >= images.length) return;
		setCurrentImageIndex(index);
		setLightboxOpen(true);
		setFade(false);
		setTimeout(() => setFade(true), 10);
	};

	const handlePrev = () => {
		setFade(false);
		if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
		fadeTimeout.current = setTimeout(() => {
			setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
			setFade(true);
		}, 200);
	};

	const handleNext = () => {
		setFade(false);
		if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
		fadeTimeout.current = setTimeout(() => {
			setCurrentImageIndex((prev) => (prev + 1) % images.length);
			setFade(true);
		}, 200);
	};

	const loadMoreImages = () => {
		setVisibleImages(prev => prev + 10);
	};

	useEffect(() => {
		if (lightboxOpen) setFade(true);
		return () => { if (fadeTimeout.current) clearTimeout(fadeTimeout.current); };
	}, [lightboxOpen, currentImageIndex]);

	// Hilfsfunktion für SEO-optimierten Namen mit kleinen Adverbien/Präpositionen
	const smallWords = [
		"mit", "und", "am", "im", "an", "auf", "bei", "von", "zu", "nach", "aus", "in", "für", "ohne", "über", "unter", "zwischen", "durch", "gegen", "während", "trotz", "wegen", "um", "bis", "als", "aber", "oder", "nor", "so", "doch", "denn"
	];
	const getSeoName = (name: string) =>
		name
			.replace(/-/g, ' ')
			.split(' ')
			.map((word, i) => {
				const lower = word.toLowerCase();
				if (i === 0 || !smallWords.includes(lower)) {
					return lower.charAt(0).toUpperCase() + lower.slice(1);
				} else {
					return lower;
				}
			})
			.join(' ');

	return (
		<main>
			<div className="container">
				<h1 className="h1-bold site-title">{getSeoName(albumFolder)}</h1>
				<section className="album-view">
					<div className="album-grid">
						{images.slice(0, visibleImages).map((image) => {
							const uniqueKey = `${albumFolder}-${image}`;
							return (
								<div
									key={uniqueKey}
									className="album-image"
									onClick={() => handleImageClick(images.indexOf(image))}
								>
									<img
										src={`/${album.url}/${image}`}
										alt={getSeoName(albumFolder)}
										title={getSeoName(albumFolder)}
										aria-label={getSeoName(albumFolder)}
										loading="lazy"
									/>
								</div>
							);
						})}
					</div>
					{visibleImages < images.length && (
						<div className="button-link-container">
							<button onClick={loadMoreImages} className="load-more-button" aria-label="Mehr Bilder laden" style={{ display: 'flex', justifyContent: 'center', margin: '2rem auto 0 auto' }}>
								Mehr Bilder laden
								<svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</button>
						</div>
					)}
				</section>

				<div className="button-link-container">
					<Link to="/galerie" className="button-link back-button">
						<span className="arrow-icon-circle">
							<svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</span>
						<span>Zurück zur Galerie</span>
					</Link>
				</div>

				{lightboxOpen && (
					<div className="custom-lightbox-overlay">
						<div className="custom-lightbox-bg" onClick={() => setLightboxOpen(false)} />
						<div className="custom-lightbox-content">
							<button className="custom-lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Schließen">×</button>
							<button className="custom-lightbox-prev" onClick={handlePrev} aria-label="Vorheriges Bild">‹</button>
							<div className={`custom-lightbox-image-container${fade ? ' fade-in' : ''}`}>
								<img
									src={`/${album.url}/${images[currentImageIndex]}`}
									alt={getSeoName(albumFolder)}
									title={getSeoName(albumFolder)}
									aria-label={getSeoName(albumFolder)}
									loading="lazy"
								/>
							</div>
							<button className="custom-lightbox-next" onClick={handleNext} aria-label="Nächstes Bild">›</button>
							<div className="lightbox-image-number-overlay">
								{images.length > 0 ? `${currentImageIndex + 1} / ${images.length}` : ''}
							</div>
						</div>
					</div>
				)}
			</div>
		</main>
	);
}
