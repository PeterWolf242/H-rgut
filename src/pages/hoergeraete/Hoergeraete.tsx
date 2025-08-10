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
				<section className="hero-section hoergeraete-hero-section">
					<article className="hero-text">
						<h1 className="site-title-alone">
							H&ouml;rger&auml;te
						</h1>
						<h2>
							Ihre Individuelle L&ouml;sung f&uuml;r mehr Lebensqualit&auml;t
						</h2>
					</article>
					<div className="hero-image">
						<img src="../../img/hoergeraete-logo_gross.webp" alt="Hörgeräte-Logo" title="Hörgeräte-Logo" aria-label="Hörgeräte-Logo" />
					</div>
				</section>
			</div>

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
