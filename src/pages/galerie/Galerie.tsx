import { Link } from 'react-router-dom';
import { aktuelles } from '../../interfaces/aktuelles';
import galerieBilder from '../../assets/galerieBilder.json';
import './Galerie.css';
import { Helmet } from "react-helmet-async";

export default function Galerie() {
	if (!Array.isArray(aktuelles)) {
		return (
			<main>
				<div className="container">
					<p>Keine Galerie-Daten verfügbar</p>
				</div>
			</main>
		);
	}

	const getFirstAlbumImage = (album: typeof aktuelles[0]) => {
		if (!album || !album.url) return album?.image || '';

		// Hole den Ordnernamen aus der URL
		const albumFolder = album.url.split('/').pop() || '';

		// Hole die Bilder aus der galerieBilder.json
		const albumImages = (galerieBilder as Record<string, string[]>)[albumFolder] || [];

		// Wenn keine Bilder gefunden wurden, verwende das Hauptbild
		if (!Array.isArray(albumImages) || albumImages.length === 0) return album.image || '';

		// Gib das erste Bild zurück
		return albumImages[0] || album.image || '';
	};

	return (
		<main>
			<Helmet>
				<link rel="canonical" href="https://hoergut-buehlot.de/Galerie" />
			</Helmet>
			<div className="container">
				<h1 className="h1-bold site-title">Galerie</h1>
				<section className="gallery-grid">
					{aktuelles.map((item) => {
						if (!item || !item.url) return null;

						const uniqueKey = item.url.split('/').pop() || item.title;
						const imagePath = getFirstAlbumImage(item);

						if (!imagePath) return null;

						return (
							<Link
								key={uniqueKey}
								to={`/Galerie/${item.url.split('/').pop()}`}
								className="gallery-item"
							>
								<div className="gallery-image">
									<img
										src={`/${item.url}/${imagePath}`}
										alt={item.title || 'Galerie Bild'}
										loading="lazy"
									/>
								</div>
								<h2 className="h2-bold">{item.title || 'Unbenannt'}</h2>
							</Link>
						);
					})}
				</section>
			</div>
		</main>
	);
}
