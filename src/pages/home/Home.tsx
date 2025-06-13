import { services } from "../../interfaces/service";
import "./Home.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
	return (
		<>
			<Helmet>
				<link rel="canonical" href="https://hoergut-buehlot.de/Startseite" />
			</Helmet>
			<main>
				<section className="top-section">
					<div className="container">
						<h1>
							<span className="highlight1">Besser <span>H&ouml;ren</span></span> <br />
							<span className="highlight2">Besser <span>Leben</span></span> <br />
						</h1>
						<h2>
							Ihr persönlicher Experte für H&ouml;rger&auml;te, Tinnitus-Behandlung und Geh&ouml;rschutz.
						</h2>
						<Link to="/Leistungen" className="button-link">
							Unseren Leistungen
							<span className="arrow-icon-circle">
								<svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</span>
						</Link>
					</div>
				</section>
				<section className="welcome container">
					<div className="welcome-text">
						<h2>Herzlich <br /> Willkommen</h2>
						<article>
							<p>
								Durch freundliches Ambiente in idyllischer Lage direkt an der Bühlot möchten wir eine einladende Atmosphäre schaffen, in der Sie sich wohlfühlen können.
							</p>
						</article>
					</div>
					<div className="welcome-picture-box">
						<img src="../../img/phonak-audeo-paradise.webp" alt="Phonak Audeo Paradise" title="Phonak Audeo Paradise" aria-label="Phonak Audeo Paradise" />
					</div>
				</section>
				<section className="services container">
					<h2>Unsere Leistungen</h2>
					<div className="services-grid">
						{services.map((service, index) => (
							<div key={index} className="service-card">
								<img src={service.image} alt={service.title} />
								<h3>{service.title}</h3>
								<p>{service.description}</p>
								<Link to={service.url} className="button-link">
									Mehr erfahren
									<span className="arrow-icon-circle">
										<svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</span>
								</Link>
							</div>
						))}
					</div>
				</section>
				<section className="advice">
					<div className="advice-bg">
						<h2>Vereinbaren Sie einen Termin <br />für eine persönliche Beratung. </h2>
						<a href="tel:+497223123456" className="button-link">
							<span>Jetzt anrufen</span>
							07223 8010784
						</a>
					</div>
				</section>
			</main >
		</>
	)
}
