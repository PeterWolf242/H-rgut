import "./Tinnitus.css";
import { Helmet } from "react-helmet-async";

export default function Tinnitus() {
	return (
		<main>
			<Helmet>
				<link rel="canonical" href="https://hoergut-buehlot.de/Tinnitus" />
			</Helmet>
			<div className="container">
				<h1 className="h1-bold site-title">Tinnitus</h1>
			</div>
			<section className="bg-container bg-image-tinnitus">
				<img
					src="../img/tinnitus-logo.webp"
					alt="Tinnitus Behandlung HörGut Bühl"
					title="Tinnitus Behandlung HörGut Bühl"
					aria-label="Tinnitus Behandlung HörGut Bühl"
					loading="lazy"
					width="2000"
					height="1250"
				/>
				<article className="bg-text bg-text-tinnitus">
					<h2 className="h2-bold" style={{ color: "var(--color-orange-light)" }}>
						Tinnitus - Sie sind nicht allein.
					</h2>
					<p className="h3" style={{ color: "var(--color-orange-light)" }}>
						Professionelle Hilfe bei Ohrgeräuschen.
					</p>
					<p>
						Tinnitus kann die Lebensqualität erheblich beeinträchtigen. Wir bieten Ihnen eine umfassende Beratung und verschiedene Behandlungsmöglichkeiten, um Ihre Ohrgeräusche zu lindern oder zu bewältigen.
					</p>
				</article>
			</section>
			<div className="container text-orange bg-orange-light">
				<h3 style={{ color: "var(--color-white)", fontWeight: "bold", lineHeight: "3" }}>
					Moderne Therapieansätze für eine bessere Lebensqualität.
				</h3>
			</div>
			<section className="container">
				<div className="tinnitus-content">
					<h2>Unsere Tinnitus-Behandlung</h2>
					<p>
						Bei Tinnitus handelt es sich um Ohrgeräusche, die nur der Betroffene hört. Diese können verschiedene Ursachen haben und unterschiedlich stark ausgeprägt sein. Wir bieten Ihnen:
					</p>
					<ul>
						<li>Umfassende Diagnostik und Beratung</li>
						<li>Hörgeräte mit Tinnitus-Noiser-Funktion</li>
						<li>Entspannungstechniken und Stressmanagement</li>
						<li>Kontinuierliche Betreuung und Anpassung</li>
					</ul>
				</div>
			</section>
		</main>
	)
}
