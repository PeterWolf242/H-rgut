import "./Footer.css";
import { Link } from "react-router-dom";
import facebookLogo from "/img/facebook-logo.svg";
import instagramLogo from "/img/instagramm-logo.svg";
import { useState, useEffect, useRef } from "react";
import { obfuscateEmail } from "../../utils/emailObfuscation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EMAIL_PARTS = obfuscateEmail("info@hoergut-buehlot.de");

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const footerColsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// ScrollTrigger registrieren
		gsap.registerPlugin(ScrollTrigger);

		const footerCols = footerColsRef.current;

		if (footerCols) {
			const cols = footerCols.querySelectorAll('.col') as NodeListOf<HTMLElement>;

			// Jede Footer-Spalte einzeln animieren, sobald sie im Viewport ist
			cols.forEach((col: HTMLElement) => {
				gsap.fromTo(col,
					{ opacity: 0, y: 50 },
					{
						opacity: 1,
						y: 0,
						duration: 1.2,
						ease: "power2.out",
						scrollTrigger: {
							trigger: col,
							start: "top 85%",
							end: "bottom 15%",
							toggleActions: "play none none reverse"
						}
					}
				);
			});
		}

		// Cleanup function
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		};
	}, []);

	return (
		<>
			<footer>
				<div className="footer-content" ref={footerColsRef}>
					<div className="col">
						<h3>&#214;ffnungszeiten</h3>
						<p>Mo - Fr: 09:00 - 18:00 Uhr</p>
						<p>Sa: 09:00 - 12:00 Uhr</p>
						<p className="highlight">Oder Termin nach Absprache</p>
					</div>
					<div className="col">
						<h3>Anschrift</h3>
						<p>H&#246;rgut an der B&#252;hlot</p>
						<p>Hüfflischer Hof 13</p>
						<p>77815 B&#252;hl</p>
					</div>
					<div className="col">
						<h3>Kontakt</h3>
						<p>Telefon: 07223 8010784</p>
						<p className="highlight">
							Email: <span id="email-parts" data-parts={JSON.stringify(EMAIL_PARTS)}>
								{EMAIL_PARTS[0]}@{EMAIL_PARTS[1]}.{EMAIL_PARTS[2]}
							</span>
						</p>
					</div>
					<div className="col">
						<h3>Social Media</h3>
						<div className="social-icons">
							<a href="https://www.facebook.com/hoergut.buehlot" target="_blank" rel="noopener noreferrer">
								<img src={facebookLogo} alt="Facebook HörGut Bühl" aria-label="Facebook HörGut Bühl" title="Facebook HörGut Bühl" />
							</a>
							<a href="https://www.instagram.com/hoergut.buehlot/" target="_blank" rel="noopener noreferrer">
								<img src={instagramLogo} alt="Instagram HörGut Bühl" aria-label="Instagram HörGut Bühl" title="Instagram HörGut Bühl" />
							</a>
						</div>
					</div>
				</div>
				<div className="footer-legal">
					<p>&copy; {currentYear} HörGut Bühl | Alle Rechte vorbehalten</p>
					<div className="footer-links">
						<Link to="/impressum"><p>Impressum</p></Link>
						<Link to="/datenschutz"><p>Datenschutzerklärung</p></Link>
					</div>
				</div>
			</footer>
		</>
	)
}
