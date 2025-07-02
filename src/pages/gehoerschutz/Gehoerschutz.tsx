import "./Gehoerschutz.css";
import { Helmet } from "react-helmet-async";

export default function Gehoerschutz() {
	return (
		<main>
			<Helmet>
				<link rel="canonical" href="https://hoergut-buehlot.de/Gehoerschutz" />
			</Helmet>
			<div className="container">
				<h1 className="h1-bold site-title">Gehörschutz</h1>
			</div>
			<section className="bg-container bg-image-gehoerschutz">
				<img
					src="../img/gehoerschutz-logo.webp"
					alt="Gehörschutz HörGut Bühl"
					title="Gehörschutz HörGut Bühl"
					aria-label="Gehörschutz HörGut Bühl"
					loading="lazy"
					width="2000"
					height="1250"
				/>
				<article className="bg-text bg-text-gehoerschutz">
					<h2 className="h2-bold" style={{ color: "var(--color-orange-light)" }}>
						Schützen Sie Ihr Gehör - für heute und morgen.
					</h2>
					<p className="h3" style={{ color: "var(--color-orange-light)" }}>
						Professioneller Gehörschutz für jeden Bedarf.
					</p>
					<p>
						Lautstärke kann Ihr Gehör dauerhaft schädigen. Wir bieten Ihnen maßgeschneiderten Gehörschutz für verschiedene Anwendungsbereiche - vom Arbeitsplatz bis zur Freizeit.
					</p>
				</article>
			</section>
			<div className="container text-orange bg-orange-light">
				<h3 style={{ color: "var(--color-white)", fontWeight: "bold", lineHeight: "3" }}>
					Maßgeschneiderte Lösungen für optimalen Schutz.
				</h3>
			</div>
			<section className="container">
				<div className="gehoerschutz-content">
					<h2>Unsere Gehörschutz-Lösungen</h2>
					<p>
						Gehörschutz ist nicht gleich Gehörschutz. Je nach Einsatzbereich und individuellen Anforderungen bieten wir verschiedene Lösungen an:
					</p>
					<div className="gehoerschutz-grid">
						<div className="gehoerschutz-item">
							<h3>Beruflicher Gehörschutz</h3>
							<p>Maßgeschneiderte Ohrstöpsel für den Arbeitsplatz, die Sicherheit und Komfort bieten.</p>
						</div>
						<div className="gehoerschutz-item">
							<h3>Freizeit-Gehörschutz</h3>
							<p>Spezielle Lösungen für Konzerte, Sportveranstaltungen und andere laute Aktivitäten.</p>
						</div>
						<div className="gehoerschutz-item">
							<h3>Schlaf-Gehörschutz</h3>
							<p>Sanfte und bequeme Ohrstöpsel für einen erholsamen Schlaf ohne Störgeräusche.</p>
						</div>
						<div className="gehoerschutz-item">
							<h3>Wasserschutz</h3>
							<p>Spezielle Ohrstöpsel für Schwimmen, Wassersport und andere Wasseraktivitäten.</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
