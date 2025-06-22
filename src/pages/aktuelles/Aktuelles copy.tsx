import "./Aktuelles.css";
import { aktuelles } from "../../interfaces/aktuelles";
import { Link } from "react-router-dom";
import ImageSlider from "../../components/image-slider/ImageSlider";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Aktuelles() {
	if (!Array.isArray(aktuelles)) {
		return (
			<main>
				<div className="container">
					<p>Keine aktuellen Daten verfügbar</p>
				</div>
			</main>
		);
	}

	const [sliderImages, setSliderImages] = useState<{ [key: string]: string[] }>({});

	useEffect(() => {
		const loadSliderImages = async () => {
			const images: { [key: string]: string[] } = {};

			for (const item of aktuelles) {
				try {
					if (!item?.slider_url || !Array.isArray(item?.slider_pictures)) {
						images[item?.slider_url || ''] = [];
						continue;
					}

					// Lade nur Bilder aus dem slider-Unterordner
					const imageUrls = item.slider_pictures
						.filter(picture => typeof picture === 'string' && picture.trim() !== '')
						.map(picture => `/${item.slider_url}/${picture}`);

					images[item.slider_url] = imageUrls;
				} catch (error) {
					console.error(`Fehler beim Laden der Bilder für ${item?.slider_url}:`, error);
					images[item?.slider_url || ''] = [];
				}
			}

			setSliderImages(images);
		};

		loadSliderImages();
	}, []);

	return (
		<main>
			<Helmet>
				<link rel="canonical" href="https://hoergut-buehlot.de/Aktuelles" />
			</Helmet>
			<div className="container">
				<h1 className="h1-bold site-title">Aktuelles</h1>

				<h2 className="h2-bold">Vergangene Veranstaltungen</h2>
				<section className="aktuelles-grid">
					{aktuelles.map((item) => {
						if (!item || !item.url || !item.title) return null;

						const uniqueKey = item.url.split('/').pop() || item.title;
						const currentSliderImages = sliderImages[item.slider_url] || [];

						return (
							<article key={uniqueKey} className="aktuelles-card">
								<ImageSlider
									images={currentSliderImages}
								/>
								<article className="aktuelles-content">
									<h2>{item.title}</h2>
									<div className="aktuelles-description">
										{Array.isArray(item.description) ? item.description.map((desc, idx) => (
											<p key={`${uniqueKey}-desc-${idx}`}>{desc}</p>
										)) : <p>Keine Beschreibung verfügbar</p>}
									</div>
									<Link
										to={`/galerie/${item.url.split('/').pop()}`}
										className="button-link button-back"
									>
										Zur Bildergalerie
										<span className="arrow-icon-circle">
											<svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</span>
									</Link>
								</article>
							</article>
						);
					})}
				</section>
			</div>
		</main>
	);
}
