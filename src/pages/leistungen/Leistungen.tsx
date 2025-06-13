import HerstellerSlider from "../../components/hersteller-slider/HerstellerSlider";
import "./Leistungen.css";
import { Helmet } from "react-helmet-async";

export default function Leistungen() {
	return (
		<main>
			<Helmet>
				<link rel="canonical" href="https://hoergut-buehlot.de/Leistungen" />
			</Helmet>
			<div className="container">
				<h1 className="h1-bold site-title">Leistungen</h1>
			</div>
			<section className="bg-container bg-image-sortiment">
				<img
					src="../img/phonak-audeo-paradise.webp"
					alt="Innenansicht 1 HörGut Bühl"
					title="Innenansicht 1 HörGut Bühl"
					aria-label="Innenansicht 1 HörGut Bühl"
					loading="lazy"
					width="2000"
					height="1250"
				/>
				<article className="bg-text bg-text-sortiment">
					<h2 className="h2-bold" style={{ color: "var(--color-orange-light)" }}>
						Die Entscheidung für ein Hörsystem ist ein sehr großer Schritt.
					</h2>
					<p className="h3" style={{ color: "var(--color-orange-light)" }}>
						Für sich selbst die richtige Lösung zu finden fällt oft schwer.
					</p>
					<p>
						Gerne möchten wir Sie auf dem Weg zu Ihrem eigenen Hörsystem begleiten und mit Ihnen gemeinsam eine Lösung finden, die sowohl Ihrem persönlichen Bedarf sowie Ihren individuellen preislichen Vorstellungen entspricht.
					</p>
				</article>
			</section>
			<div className="container text-orange bg-orange-light">
				<h3 style={{ color: "var(--color-white)", fontWeight: "bold", lineHeight: "3" }}>
					Um ein Höchstmaß an Individualität zu bieten, legen wir Wert auf eine breite Auswahl an Produkten.
				</h3>
			</div>
			<HerstellerSlider />
		</main>
	)
}
