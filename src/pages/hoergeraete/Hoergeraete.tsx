import HerstellerSlider from "../../components/hersteller-slider/HerstellerSlider";
import "./Hoergeraete.css";
import { Helmet } from "react-helmet-async";
import { bauformen } from "../../interfaces/bauformen";
import { technikStufen } from "../../interfaces/technikstufen";
import Accordion from "../../components/Accordion/Accordion";

export default function Hoergeraete() {
	return (
		<main>
			<Helmet>
				<link rel="canonical" href="https://hoergut-buehlot.de/Hoergeraete" />
			</Helmet>
			<div className="container">
				<h1 className="h1-bold site-title">Hörgeräte</h1>
			</div>
			<section className="bg-container bg-image-sortiment">
				<img
					src="../img/phonak-audeo-paradise.webp"
					alt="Ponak-Adeo-Pradise"
					title="Ponak-Adeo-Pradise"
					aria-label="Ponak-Adeo-Pradise"
					loading="lazy"
					width="2000"
					height="1250"
				/>
				{/*<article className="bg-text bg-text-sortiment">
					<h2 className="h2-bold" style={{ color: "var(--color-orange-light)" }}>
						Die Entscheidung für ein Hörsystem ist ein sehr großer Schritt.
					</h2>
					<p className="h3" style={{ color: "var(--color-orange-light)" }}>
						Für sich selbst die richtige Lösung zu finden fällt oft schwer.
					</p>
					<p>
						Gerne möchten wir Sie auf dem Weg zu Ihrem eigenen Hörsystem begleiten und mit Ihnen gemeinsam eine Lösung finden, die sowohl Ihrem persönlichen Bedarf sowie Ihren individuellen preislichen Vorstellungen entspricht.
					</p>
				</article>*/}
				<article className="bg-text bg-text-sortiment">
					<h2 className="h2-bold" style={{ color: "var(--color-orange-light)" }}>
						Hörgeräte – Ihre individuelle Lösung für mehr Lebensqualität
					</h2>
					<p>
						Ein Hörgerät ist mehr als Technik – es ist der Schlüssel zu Ihrer Welt. Die Entscheidung für ein Hörsystem ist ein großer Schritt. Umso wichtiger ist es, dass es zu Ihnen passt: zu Ihrem Hörverlust, Ihrem Alltag und Ihrem Budget. Deshalb nehmen wir uns Zeit, Sie kennenzulernen – bevor wir Ihnen eines unserer ausgewählten Systeme zur Ausprobe anpassen.
					</p>
				</article>
			</section>
			<div className="box-top-abstand">
				<h3 className="h3-bold">Unsere Bauformen im Überblick</h3>
			</div>

			<div className="container">
				<div className="bauformen-container">
					{bauformen.map((bauform, index) => (
						<div
							key={index}
							className="bauformen-item"
							style={{
								backgroundColor: bauform.bg_color,
								color: bauform.content_color
							}}
						>
							<h3 style={{ color: bauform.title_color }}>
								{bauform.title}
							</h3>
							<ul>
								{bauform.content.map((item, itemIndex) => (
									<li key={itemIndex}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="box-top-abstand box-top-abstand-2">
				<h3 className="h3-bold">Technikstufen – von der <span>Basis</span> bis zur <span>Oberklasse</span></h3>
			</div>

			<div className="container">
				<Accordion items={technikStufen} />
			</div>

			<div className="container">
				<div className="funktionen-box">
					<div className="funktionen-header">
						<h3>Moderne Funktionen & Zubehör</h3>
					</div>
					<div className="funktionen-content">
						<ul className="funktionen-list">
							<li>
								<span className="checkbox-icon"></span>
								Bluetooth: Verbindung mit Handy, TV, Tablet
							</li>
							<li>
								<span className="checkbox-icon"></span>
								Fernbedienung oder App-Steuerung
							</li>
							<li>
								<span className="checkbox-icon"></span>
								TV-Streamer, Telefonadapter, Mikrofone
							</li>
							<li>
								<span className="checkbox-icon"></span>
								Tinnitus-Funktionen (separate Seite)
							</li>
							<li>
								<span className="checkbox-icon"></span>
								Gehörschutz (separate Seite)
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="box-top-abstand box-top-abstand-3">
				<h3 className="h3-bold">Unsere Partner</h3>
			</div>
			<HerstellerSlider />
		</main>
	)
}
