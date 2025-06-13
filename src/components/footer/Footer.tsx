import "./Footer.css";
import { Link } from "react-router-dom";
import facebookLogo from "/img/facebook-logo.svg";
import instagramLogo from "/img/instagramm-logo.svg";
import { useState } from "react";

const COOKIE_KEY = "cookieConsent";

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const [_, setForceUpdate] = useState(0);

	const handleRevoke = () => {
		localStorage.removeItem(COOKIE_KEY);
		setForceUpdate(x => x + 1); // erzwingt ein Re-Render, damit der Banner wieder erscheint
		window.location.reload(); // optional: Seite neu laden, damit Banner sicher erscheint
	};

	return (
		<>
			<footer>
				<div className="footer-content">
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
						<p className="highlight">Email: info@hoergut-buehlot.de</p>
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
						<button className="cookie-revoke-static" onClick={handleRevoke}>
							Cookie-Einstellungen widerrufen
						</button>
					</div>
				</div>
			</footer>
		</>
	)
}
