import { filialen } from "../../interfaces/filialen";
import "./Filialen.css";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

export default function Filialen() {
	const [activeMap, setActiveMap] = useState<string | null>(null);

	const toggleMap = (filialeId: string) => {
		setActiveMap(activeMap === filialeId ? null : filialeId);
	};

	return (
		<main>
			<Helmet>
				<meta name="description" content="Filialen" />
				<link rel="canonical" href="https://hoergut-buehlot.de/Filialen" />
			</Helmet>
			<div className="container">
				<h1 className="h1-bold site-title">Unsere Filialen</h1>
				<section className="filialen-grid">
					{filialen.map((filiale) => (
						<article key={filiale.id} className="filiale-card">
							<div className="filiale-image">
								<img
									src={`/${filiale.image}`}
									alt={filiale.name}
									title={filiale.name}
									loading="lazy"
								/>
							</div>
							<div className="filiale-content">
								<h2 className="h2-bold">{filiale.name}</h2>
								<div className="filiale-address">
									<p>{filiale.strasse}</p>
									<p>{filiale.plz} {filiale.ort}</p>
								</div>
								<div className="filiale-hours">
									<h3>Öffnungszeiten</h3>
									{filiale.oeffnungszeiten.map((zeit, index) => (
										<p key={`${filiale.id}-zeit-${index}`}>{zeit}</p>
									))}
								</div>
								<div className="map-section">
									{activeMap === filiale.id ? (
										<article className="map-container">
											<div className="map-image">
												<img src={`/${filiale.mapImage}`} alt={`Karte ${filiale.name}`} title={`Karte ${filiale.name}`} aria-label={`Karte ${filiale.name}`} loading="lazy" />
											</div>

											<button
												onClick={() => toggleMap(filiale.id)}
												className="button-link close-map"
											>
												Karte schließen
												<span className="arrow-icon-circle">
													<svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</button>
										</article>
									) : (
										<button
											onClick={() => toggleMap(filiale.id)}
											className="button-link show-map"
										>
											Auf Karte anzeigen
											<span className="arrow-icon-circle">
												<svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</button>
									)}
								</div>
							</div>
						</article>
					))}
				</section>
			</div>
		</main>
	);
}
