import "./Team.css"
import { teamMembers, type TeamMember } from "../../interfaces/teamMembers"
import { useState, useMemo } from "react"
import { Helmet } from "react-helmet-async";

export default function Team() {
	const [imageError, setImageError] = useState<Record<string, boolean>>({});

	// Verbesserte Validierung der teamMembers-Daten
	const validTeamMembers = useMemo(() => {
		if (!Array.isArray(teamMembers)) {
			console.error('teamMembers ist kein Array');
			return [];
		}

		return teamMembers.filter((member): member is TeamMember => {
			if (!member || typeof member !== 'object') {
				console.error('Ungültiges Teammitglied:', member);
				return false;
			}

			const requiredFields = {
				id: 'string',
				name: 'string',
				role: 'string',
				description: 'string',
				image: 'string',
				class: 'string'
			};

			const isValid = Object.entries(requiredFields).every(([field, type]) => {
				const value = member[field as keyof TeamMember];
				const isValid = typeof value === type && (type !== 'string' || value.trim() !== '');
				if (!isValid) {
					console.error(`Ungültiges Feld ${field} für Teammitglied:`, member);
				}
				return isValid;
			});

			return isValid;
		});
	}, [teamMembers]);

	const handleImageError = (memberId: string) => {
		if (!memberId) return;
		setImageError(prev => ({ ...prev, [memberId]: true }));
	};

	const renderTeamMember = (member: TeamMember) => {
		if (!member || !member.id) return <></>;

		return (
			<article key={member.id} className="team-card">
				<div className="team-card-header">
					<div className="team-img-wrapper-container">
						<div className="team-img-wrapper">
							<img
								className={`team-img ${member.class || ''}`}
								src={imageError[member.id] ? member.image.replace('.png', '-hoergut-buehl.png') : member.image}
								alt={member.name || 'Teammitglied'}
								title={member.name || 'Teammitglied'}
								aria-label={member.name || 'Teammitglied'}
								loading="lazy"
								onError={() => handleImageError(member.id)}
							/>
						</div>
					</div>
					<div className="team-card-header-text">
						<h2>{member.name || 'Unbekannt'}</h2>
						<h3>{member.role || 'Keine Rolle angegeben'}</h3>
					</div>
				</div>
				<article className="team-content">
					<p>{member.description || 'Keine Beschreibung verfügbar'}</p>
				</article>
			</article>
		);
	};

	if (!validTeamMembers.length) {
		return (
			<main>
				<div className="container">
					<h1 className="h1-bold site-title">Team</h1>
					<p>Keine Teammitglieder verfügbar.</p>
				</div>
			</main>
		);
	}

	return (
		<main>
			<Helmet>
				<link rel="canonical" href="https://hoergut-buehlot.de/Team" />
			</Helmet>
			<h1 className="h1-bold site-title">Team</h1>

			{/* Desktop Version */}
			<div className="about-team-desktop">
				<div className="team-text-block">
					{/*<h2 className="h1-bold">Über uns</h2>*/}
					<p>
						Unser Anspruch besteht darin, durch Fachkompetenz sowie Innovationsgeist zu überzeugen und gleichermaßen immer aufgeschlossen für Neues zu bleiben.
						Dabei begegnen wir den Anliegen unserer Kunden stets mit offenen Ohren und unserer Arbeit jeden Tag mit sehr viel Freude. <br /><br />
						Wir freuen uns, Sie bei uns begrüßen zu dürfen.
					</p>
				</div>
				<div className="team-image-block">
					<img
						src="/img/team-hoergut-buehl.webp"
						alt="Team HörGut Bühl"
						onError={(e) => {
							const target = e.target as HTMLImageElement;
							target.src = "/img/team-hoergut-buehl.png";
						}}
					/>
				</div>
			</div>

			{/* Mobile Version */}
			<div className="about-team-mobile">
				<div className="team-header">
					{/*<h2 className="h1-bold">Über uns</h2>*/}
					<div className="team-image-block">
						<img
							src="/img/team-hoergut-buehl-mobile.png"
							alt="Team HörGut Bühl"
							onError={(e) => {
								const target = e.target as HTMLImageElement;
								target.src = "/img/team-hoergut-buehl-mobile.png";
							}}
						/>
					</div>
				</div>
				<div className="team-text-block">
					<p>
						Unser Anspruch besteht darin, durch Fachkompetenz sowie Innovationsgeist zu überzeugen und gleichermaßen immer aufgeschlossen für Neues zu bleiben.
						Dabei begegnen wir den Anliegen unserer Kunden stets mit offenen Ohren und unserer Arbeit jeden Tag mit sehr viel Freude. <br /><br />
						Wir freuen uns, Sie bei uns begrüßen zu dürfen.
					</p>
				</div>
			</div>

			<section className="linear-blue">
				<div className="wave-blue-container">
					<img src="/img/wave-blue.png" alt="blaue Welle" loading="lazy" />
				</div>
				<div className="container">
					<div className="team-grid">
						{validTeamMembers.map(renderTeamMember)}
					</div>
				</div>
			</section>
		</main>
	);
}
