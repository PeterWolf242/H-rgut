import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isNewsOpen, setIsNewsOpen] = useState(false);
	const [isLeistungenOpen, setIsLeistungenOpen] = useState(false);
	const [hasShadow, setHasShadow] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setHasShadow(scrollPosition > 100);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		if (!isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	};

	const toggleNews = (e: React.MouseEvent) => {
		e.preventDefault();
		setIsNewsOpen(!isNewsOpen);
	};

	const toggleLeistungen = (e: React.MouseEvent) => {
		e.preventDefault();
		setIsLeistungenOpen(!isLeistungenOpen);
	};

	const isActive = (path: string) => {
		if (path === '/') {
			return location.pathname === '/' || location.pathname === '' || location.pathname === '/Startseite';
		}
		return location.pathname.startsWith(path);
	};

	return (
		<header className={hasShadow ? 'with-shadow' : ''}>
			<Link to="/">
				<img className="logo" src="/img/logo_hoergut_buehl.webp" width="250" height="79" alt="Logo Hoergut Buehl" title="Logo Hoergut Buehl" aria-label="Logo Hoergut Buehl" loading="lazy" />
			</Link>

			<button
				className={`hamburger ${isMenuOpen ? 'active' : ''}`}
				onClick={toggleMenu}
				aria-label="Menü öffnen/schließen"
			>
				<span></span>
				<span></span>
				<span></span>
			</button>

			<div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

			<nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
				<ul>
					<li><Link to="/" className={isActive('/') ? 'nav-link-active' : ''} onClick={toggleMenu}>Startseite</Link></li>

					<li className="dropdown">
						<button
							onClick={toggleLeistungen}
							className="dropdown-toggle"
							aria-expanded={isLeistungenOpen}
							aria-controls="leistungen-dropdown"
						>
							Leistungen
							<span className={`arrow ${isLeistungenOpen ? 'active' : ''}`}></span>
						</button>
						<ul
							id="leistungen-dropdown"
							className={`dropdown-menu ${isLeistungenOpen ? 'active' : ''}`}
						>
							<li><Link to="/Hoergeraete" className={isActive('/Hoergeraete') ? 'nav-link-active' : ''} onClick={toggleMenu}>Hörgeräte</Link></li>
							<li><Link to="/Tinnitus" className={isActive('/Tinnitus') ? 'nav-link-active' : ''} onClick={toggleMenu}>Tinnitus</Link></li>
							<li><Link to="/Gehoerschutz" className={isActive('/Gehoerschutz') ? 'nav-link-active' : ''} onClick={toggleMenu}>Gehörschutz</Link></li>
						</ul>
					</li>

					<li><Link to="/Team" className={isActive('/Team') ? 'nav-link-active' : ''} onClick={toggleMenu}>Team</Link></li>

					<li className="dropdown">
						<button
							onClick={toggleNews}
							className="dropdown-toggle"
							aria-expanded={isNewsOpen}
							aria-controls="news-dropdown"
						>
							Aktuelles & Galerie
							<span className={`arrow ${isNewsOpen ? 'active' : ''}`}></span>
						</button>
						<ul
							id="news-dropdown"
							className={`dropdown-menu ${isNewsOpen ? 'active' : ''}`}
						>
							<li><Link to="/Aktuelles" className={isActive('/Aktuelles') ? 'nav-link-active' : ''} onClick={toggleMenu}>Aktuelles</Link></li>
							<li><Link to="/Galerie" className={isActive('/Galerie') ? 'nav-link-active' : ''} onClick={toggleMenu}>Galerie</Link></li>
						</ul>
					</li>

					<li><Link to="/Filialen" className={isActive('/Filialen') ? 'nav-link-active' : ''} onClick={toggleMenu}>Filialen</Link></li>
					<li><Link to="/Kontakt" className={isActive('/Kontakt') ? 'nav-link-active' : ''} onClick={toggleMenu}>Kontakt</Link></li>
				</ul>
			</nav>
		</header>
	);
}
