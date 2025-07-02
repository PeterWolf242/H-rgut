import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CookieBanner.css";

const COOKIE_KEY = "cookieConsent";

const CookieBanner: React.FC = () => {
	const [visible, setVisible] = useState(false);
	const [consent, setConsent] = useState<null | boolean>(null);

	useEffect(() => {
		const saved = localStorage.getItem(COOKIE_KEY);
		if (saved === "true") setConsent(true);
		else if (saved === "false") setConsent(false);
		else setVisible(true);
	}, []);

	const handleAccept = () => {
		setConsent(true);
		setVisible(false);
		localStorage.setItem(COOKIE_KEY, "true");
	};

	const handleDecline = () => {
		setConsent(false);
		setVisible(false);
		localStorage.setItem(COOKIE_KEY, "false");
	};

	const handleRevoke = () => {
		setConsent(null);
		setVisible(true);
		localStorage.removeItem(COOKIE_KEY);
	};

	if (!visible && consent !== null) {
		return null;
	}

	return (
		<>
			{visible && (
				<div className="cookie-overlay" />
			)}
			<div className="cookie-banner">
				<div className="cookie-banner__text">
					Wir verwenden Cookies, um unsere Website und unseren Service zu optimieren.
					Sie können selbst entscheiden, ob Sie Cookies zulassen möchten.
					<br />
					<strong>Zweck:</strong> Optimierung der Website, keine Tracking- oder Werbe-Cookies.<br />
					<strong>Speicherdauer:</strong> 1 Jahr oder bis zum Widerruf.<br />
					Weitere Informationen finden Sie in unserer {" "}
					<Link to="/Datenschutz" target="_blank" className="cookie-datenschutz-link">Datenschutzerklärung</Link>.
				</div>
				<div className="cookie-banner__actions">
					<button className="cookie-btn accept" onClick={handleAccept}>Akzeptieren</button>
					<button className="cookie-btn decline" onClick={handleDecline}>Ablehnen</button>
				</div>
			</div>
		</>
	);
};

export default CookieBanner;
