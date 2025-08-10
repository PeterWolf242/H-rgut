import { services } from "../../interfaces/service";
import "./Home.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
	const h1OneRef = useRef(null);
	const h1TwoRef = useRef(null);
	const h2Ref = useRef(null);
	const buttonRef = useRef(null);
	const welcomeTextRef = useRef(null);
	const welcomePictureRef = useRef(null);
	const leistungenTitleRef = useRef(null);
	const serviceCardsRef = useRef<HTMLDivElement>(null);
	const adviceTitleRef = useRef(null);
	const adviceButtonRef = useRef(null);
	const heroContentRef = useRef<HTMLDivElement>(null);
	const topSectionOverlayRef = useRef<HTMLDivElement>(null);

	const scrollToLeistungen = () => {
		const leistungenElement = document.getElementById('leistungen');
		if (leistungenElement) {
			leistungenElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	};

	useEffect(() => {
		// ScrollTrigger registrieren
		gsap.registerPlugin(ScrollTrigger);

		const h1One = h1OneRef.current;
		const h1Two = h1TwoRef.current;
		const h2 = h2Ref.current;
		const button = buttonRef.current;
		const welcomeText = welcomeTextRef.current;
		const welcomePicture = welcomePictureRef.current;
		const leistungenTitle = leistungenTitleRef.current;
		const serviceCards = serviceCardsRef.current;
		const adviceTitle = adviceTitleRef.current;
		const adviceButton = adviceButtonRef.current;
		const heroContent = heroContentRef.current;
		const topSectionOverlay = topSectionOverlayRef.current;

		// Scroll-Effekt für hero-content und overlay Transparenz
		const handleScroll = () => {
			if (heroContent) {
				const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				const heroContentHeight = heroContent.offsetHeight;
				const fadeEndPosition = heroContentHeight * 0.6; // 60% der Hero-Content-Höhe

				let opacity = 1;
				let fadeRange = fadeEndPosition;
				let currentProgress = 0;

				if (scrollTop > 0) {
					fadeRange = fadeEndPosition;
					currentProgress = Math.min(scrollTop, fadeEndPosition);
					// Mache den Effekt sehr deutlich - von 1 zu 0 über den gesamten Bereich
					opacity = Math.max(0, 1 - (currentProgress / fadeRange) * 0.6);
					if (scrollTop > fadeEndPosition) {
						opacity = 0;
					}
				}

				// Wende Transparenz auf alle Kind-Elemente an
				const children = heroContent.children;
				for (let i = 0; i < children.length; i++) {
					const child = children[i] as HTMLElement;
					child.style.opacity = opacity.toString();
					const parallaxOffset = scrollTop * 0.03;
					child.style.transform = `translateY(${parallaxOffset}px)`;
				}

				// Scroll-Effekt für das Overlay (top-section-overlay)
				if (topSectionOverlay) {
					// Dynamische Anpassung des Farbverlaufs beim Scrollen
					const percent = Math.max(0, 1 - (currentProgress / fadeRange));

					// Wenn der Hero-Content fast aus dem Viewport ist, Overlay komplett transparent machen
					if (scrollTop > fadeEndPosition * 0.8) {
						topSectionOverlay.style.opacity = '0';
					} else {
						topSectionOverlay.style.opacity = '1';

						// Beim Scrollen nach unten: Transparenz nimmt zu, aber mit weichem Übergang
						// Beim Zurückscrollen: Transparenz nimmt ab (zurück zu 30%)
						const pos1 = 30 + (80 - 30) * (1 - percent); // transparent wandert von 30% auf 80%
						const pos2 = 50 + (85 - 50) * (1 - percent); // 0.3 wandert von 50% auf 85%
						const pos3 = 70 + (90 - 70) * (1 - percent); // 0.7 wandert von 70% auf 90%
						const pos4 = 90 + (95 - 90) * (1 - percent); // schwarz wandert von 90% auf 95%

						topSectionOverlay.style.background = `linear-gradient(
							transparent ${pos1}%,
							rgba(0,0,0,0.3) ${pos2}%,
							rgba(0,0,0,0.7) ${pos3}%,
							var(--color-black) ${pos4}%
						)`;
					}
				}
			}
		};

		// Event-Listener hinzufügen
		window.addEventListener('scroll', handleScroll);

		if (h1One && h1Two && h2 && button) {
			// Timeline erstellen für sequenzielle Animationen
			const tl = gsap.timeline();

			// Erste Animation: "Besser Hören" von links
			tl.fromTo(h1One,
				{ opacity: 0, x: -100 },
				{ opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }
			);

			// Zweite Animation: "Besser Leben" von rechts
			tl.fromTo(h1Two,
				{ opacity: 0, x: 100 },
				{ opacity: 1, x: 0, duration: 1.5, ease: "power2.out" },
				"-=1" // Startet 1 Sekunde vor Ende der vorherigen Animation
			);

			// Dritte Animation: h2-Text von unten (Slidein)
			tl.fromTo(h2,
				{ opacity: 0, y: 50 },
				{ opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
				"-=0.5" // Startet 0.5 Sekunden vor Ende der vorherigen Animation
			);

			// Vierte Animation: Button von unten (Slidein)
			tl.fromTo(button,
				{ opacity: 0, y: 30 },
				{ opacity: 1, y: 0, duration: 1, ease: "power2.out" },
				"-=0.4" // Startet 0.4 Sekunden vor Ende der vorherigen Animation
			);
		}

		// Scroll-Animationen für Welcome-Sektion
		if (welcomeText && welcomePicture) {
			// Welcome-Text von links
			gsap.fromTo(welcomeText,
				{ opacity: 0, x: -100 },
				{
					opacity: 1,
					x: 0,
					duration: 1.2,
					ease: "power2.out",
					scrollTrigger: {
						trigger: welcomeText,
						start: "top 80%",
						end: "bottom 20%",
						toggleActions: "play none none reverse"
					}
				}
			);

			// Welcome-Picture von rechts
			gsap.fromTo(welcomePicture,
				{ opacity: 0, x: 100 },
				{
					opacity: 1,
					x: 0,
					duration: 1.2,
					ease: "power2.out",
					scrollTrigger: {
						trigger: welcomePicture,
						start: "top 80%",
						end: "bottom 20%",
						toggleActions: "play none none reverse"
					}
				}
			);
		}

		// Scroll-Animationen für Leistungen-Sektion
		if (leistungenTitle) {
			// Leistungen-Titel von unten
			gsap.fromTo(leistungenTitle,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 1.2,
					ease: "power2.out",
					scrollTrigger: {
						trigger: leistungenTitle,
						start: "top 80%",
						end: "bottom 20%",
						toggleActions: "play none none reverse"
					}
				}
			);
		}

		// Scroll-Animationen für Service-Cards
		if (serviceCards) {
			const cards = serviceCards.querySelectorAll('.service-card') as NodeListOf<HTMLElement>;

			// Jede Karte einzeln animieren mit unterschiedlichen Richtungen
			cards.forEach((card: HTMLElement, index: number) => {
				let initialPosition = {};

				// Verschiedene Animationen je nach Index
				switch (index) {
					case 0: // Hörgeräte - von links
						initialPosition = { opacity: 0, x: -100 };
						break;
					case 1: // Tinnitus - von unten
						initialPosition = { opacity: 0, y: 60 };
						break;
					case 2: // Gehörschutz - von rechts
						initialPosition = { opacity: 0, x: 100 };
						break;
					default:
						initialPosition = { opacity: 0, y: 60 };
				}

				gsap.fromTo(card,
					initialPosition,
					{
						opacity: 1,
						x: 0,
						y: 0,
						duration: 1.2,
						ease: "power2.out",
						scrollTrigger: {
							trigger: card,
							start: "top 85%",
							end: "bottom 15%",
							toggleActions: "play none none reverse"
						}
					}
				);
			});
		}

		// Scroll-Animationen für Advice-Sektion
		if (adviceTitle) {
			// Advice-Titel von unten
			gsap.fromTo(adviceTitle,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 1.2,
					ease: "power2.out",
					scrollTrigger: {
						trigger: adviceTitle,
						start: "top 80%",
						end: "bottom 20%",
						toggleActions: "play none none reverse"
					}
				}
			);
		}

		if (adviceButton) {
			// Advice-Button von unten
			gsap.fromTo(adviceButton,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 0.9,
					ease: "power2.out",
					scrollTrigger: {
						trigger: adviceButton,
						start: "top 80%",
						end: "bottom 20%",
						toggleActions: "play none none reverse"
					}
				}
			);
		}

		// Cleanup function
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
			window.removeEventListener('scroll', handleScroll);
		};
	}, [])

	return (
		<>
			<Helmet>
				<link rel="canonical" href="https://hoergut-buehlot.de/Startseite" />
				<link
					rel="preload"
					as="image"
					href="/img/aussenansicht-hoergut-buehl.webp"
					type="image/webp"
				/>
			</Helmet>

			<main>
				<section className="top-section">
					<div className="top-section-overlay" ref={topSectionOverlayRef}></div>
					<div className="container hero-content" ref={heroContentRef}>
						<h1>
							<span className="highlight1" ref={h1OneRef}>Besser <span>Hören</span></span> <br />
							<span className="highlight2" ref={h1TwoRef}>Besser <span>Leben</span></span> <br />
						</h1>
						<h2 ref={h2Ref}>
							Ihr persönlicher Experte für Hörgeräte, Tinnitus-Behandlung und Gehörschutz.
						</h2>
						<button onClick={scrollToLeistungen} className="button-link" ref={buttonRef}>
							Unsere Leistungen
							<span className="arrow-icon-circle">
								<svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</span>
						</button>
					</div>
				</section>

				<section className="welcome container" id="welcome-section">
					<div className="welcome-text" ref={welcomeTextRef}>
						<h2>Herzlich <br /> Willkommen</h2>
						<article>
							<p>
								Durch freundliches Ambiente in idyllischer Lage direkt an der Bühlot möchten wir eine einladende Atmosphäre schaffen, in der Sie sich wohlfühlen können.
							</p>
						</article>
					</div>
					<div className="welcome-picture-box" ref={welcomePictureRef}>
						<img src="../../img/phonak-audeo-paradise.webp" width="383" height="240" alt="Phonak Audeo Paradise" title="Phonak Audeo Paradise" aria-label="Phonak Audeo Paradise" />
					</div>
				</section>
				<section className="services container">
					<h2 id="leistungen">Unsere Leistungen</h2>
					<div className="services-grid" ref={serviceCardsRef}>
						{services.map((service, index) => (
							<div key={index} className="service-card">
								<div className="service-card-image">
									<img src={service.image} alt={service.title} title={service.title} aria-label={service.title} />
								</div>

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
						<h2 ref={adviceTitleRef}>Vereinbaren Sie einen Termin <br />für eine persönliche Beratung. </h2>
						<a href="tel:+497223123456" className="button-link" ref={adviceButtonRef}>
							<span>Jetzt anrufen</span>
							07223 8010784
						</a>
					</div>
				</section>
			</main>
		</>
	)
}
