import "./Tinnitus.css";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Threads from './Threads.tsx';

// GSAP Plugins registrieren
gsap.registerPlugin(ScrollTrigger);

export default function Tinnitus() {
	const firstSectionRef = useRef<HTMLElement>(null);
	const secondSectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		// Erste Sektion: Bild von links, Text von rechts
		if (firstSectionRef.current) {
			const firstImage = firstSectionRef.current.querySelector('.hero-image');
			const firstText = firstSectionRef.current.querySelector('.tinnitus-text');

			// Initiale Position setzen
			gsap.set(firstImage, { x: -100, opacity: 0 });
			gsap.set(firstText, { x: 100, opacity: 0 });

			// Animation für das Bild (von links nach rechts)
			gsap.to(firstImage, {
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: firstSectionRef.current,
					start: "top 80%",
					end: "bottom 20%",
					toggleActions: "play none none reverse"
				}
			});

			// Animation für den Text (von rechts nach links)
			gsap.to(firstText, {
				x: 0,
				opacity: 1,
				duration: 1,
				delay: 0.3,
				ease: "power2.out",
				scrollTrigger: {
					trigger: firstSectionRef.current,
					start: "top 80%",
					end: "bottom 20%",
					toggleActions: "play none none reverse"
				}
			});
		}

		// Zweite Sektion: von unten nach oben
		if (secondSectionRef.current) {
			const secondText = secondSectionRef.current.querySelector('.tinnitus-text');

			// Initiale Position setzen
			gsap.set(secondText, { y: 100, opacity: 0 });

			// Animation für die zweite Sektion (von unten nach oben)
			gsap.to(secondText, {
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: secondSectionRef.current,
					start: "top 80%",
					end: "bottom 20%",
					toggleActions: "play none none reverse"
				}
			});
		}

		// Cleanup
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		};
	}, []);

	return (
		<main>
			<Helmet>
				<link rel="canonical" href="https://hoergut-buehlot.de/Tinnitus" />
			</Helmet>
			<div className="container">
				<section className="hero-section">
					<article className="hero-text">
						<h1 className="site-title-alone">
							Tinnitus
						</h1>
						<h2>
							Hilfe durch moderne Hörsysteme
						</h2>
					</article>
					<div className="hero-image">
						<img src="../../img/tinnitus-logo_gross.png" alt="Tinnitus" />
					</div>
				</section>
				<section ref={firstSectionRef} className="tinnitus-text-section">
					<div className="hero-image">
						<img src="../../img/Kreis-mit-sinuskurve-und-hoergeraet.png" alt="Tinnitus" />
					</div>
					<article className="tinnitus-text">
						<h2>
							Viele Menschen leiden unter einem dauerhaften Ohrgeräusch, auch Tinnitus genannt.
						</h2>
						<p>
							Dieses kann sich als Pfeifen, Rauschen oder Brummen äußern und wirkt sich auf
							Konzentration, Schlaf und Lebensqualität aus. Nicht immer lässt sich die Ursache
							beseitigen – aber man kann lernen, mit dem Tinnitus zu leben. Moderne Hörgeräte mit
							speziellen Tinnitusfunktionen können dabei helfen, das Ohrgeräusch in den Hintergrund
							zu rücken.
						</p>
					</article>
				</section>
			</div>

			{/* Threads Hintergrund Sektion */}
			<section className="threads-background">
				<Threads
					color={[0.01, 0.55, 1]}
					amplitude={1.5}
					distance={0.5}
					enableMouseInteraction={false}
				/>
				<div className="container">
					<h3>
						Ein Pfeifen im Ohr? <br />
						<span>
							Wir hören genau hin.
						</span>
					</h3>
				</div>
			</section>

			<div className="container">
				<section ref={secondSectionRef} className="tinnitus-text-section">
					{/* Haupttext Tinnitus */}
					<article className="tinnitus-text tinnitus-text-main-2">
						<p>
							<article className="tinnitus-text rounded-box">
								<p>
									Bei einem chronischen Tinnitus reagiert das Gehirn empfindlich auf fehlende akustische
									Reize – besonders bei gleichzeitigem Hörverlust. Hörsysteme können hier helfen, indem
									sie nicht nur das Hören verbessern, sondern zusätzlich individuell anpassbare
									Tinnitus-Rauschsignale erzeugen. Diese Tinnitus-Noiser überdecken das Ohrgeräusch
									nicht, sondern bieten dem Gehirn eine alternative, neutrale Klangwelt zur Verarbeitung.
									Unser Ziel: weniger Aufmerksamkeit auf den Tinnitus, mehr Fokus auf das Leben.
								</p>
							</article>
						</p>
					</article>
				</section>
			</div>
		</main>
	)
}
