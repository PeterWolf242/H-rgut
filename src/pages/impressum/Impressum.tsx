import { Helmet } from "react-helmet-async";
import { obfuscateEmail } from '../../utils/emailObfuscation';

const EMAIL_PARTS = obfuscateEmail("info@hoergut-buehlot.de");

export default function Impressum() {
	return (
		<>
			<Helmet>
				<link rel="canonical" href="https://hoergut-buehlot.de/Datenschutz" />
			</Helmet>
			<main>
				<div className="container legal-notice">
					<h1 className="h1-bold site-title">Impressum</h1>

					<p>H&ouml;ren und Sehen Junkersdorf &amp; Reifschneider GbR<br />
						H&uuml;fflischer Hof 13<br />
						77815 B&uuml;hl</p>

					<p><strong>Vertreten durch:</strong><br />
						Michael Junkersdorf<br />
						Markus Reifschneider</p>

					<h2>Kontakt</h2>
					<p>Telefon: 07223-8010784<br />
						E-Mail: <span id="email-parts" data-parts={JSON.stringify(EMAIL_PARTS)}>
							{EMAIL_PARTS[0]}@{EMAIL_PARTS[1]}.{EMAIL_PARTS[2]}
						</span></p>

					<h2>Umsatzsteuer-ID</h2>
					<p>Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br />
						DE343437854</p>

					<h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2><br />
					<p>Berufsbezeichnung:<br /><br />
						H&ouml;rakustik-Meister</p>

					<p>Zust&auml;ndige Kammer: <br /><br />
						Handwerkskammer Karlsruhe<br />
						Friedrichspl. 4-5<br />
						76133 Karlsruhe</p>

					<p>Verliehen in:<br /><br />
						Deutschland</p><br />
					<h2>Redaktionell verantwortlich</h2><br />
					<p>Markus Reifschneider<br /><br />
						H&uuml;fflischer Hof 13 <br />
						77815 B&uuml;hl</p>
				</div>
			</main>
		</>
	);
}
