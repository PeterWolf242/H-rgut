export interface AktuellesNews {
	title: string;
	description: string[];
	url: string;
	slider_url: string;
	slider_pictures: string[];
	image: string;
}

export const aktuellesNews: AktuellesNews[] = [
	{
		title: 'Neueröffnung am 21.06.2025 in Rheinau',
		description: ['Liebe Kundinnen und Kunden,', 'gestern am Samstag, den 21.06.2025 war es endlich soweit. Vier Jahre nach der Eröffnung von HörGut an der Bühlot haben wir nun mit HörGut am Hofgut in Rheinau-Rheinbischofsheim unsere erste Tagesfiliale eröffnet. Damit möchten wir den Bedarf an Serviceleistungen, Hörtests und Hörgeräteanpassungen auch für Kundinnen und Kunden aus den Bezirken Kehl, Rheinau und Lichtenau noch näher abbilden.', 'Unser Hörakustikmeister Markus Reifschneider ist für Sie vor Ort – immer Mittwochvormittags zwischen 09.00 Uhr und 12.00 Uhr und Samstagnachmittags zwischen 14.00 Uhr und 16.00 Uhr – und berät Sie kompetent und herzlich in allen Fragen rund um das Thema Gutes Hören.', 'Ein herzliches Dankeschön gilt allen Besucherinnen und Besuchern sowie Helferinnen und Helfern, die den Eröffnungstag mit viel guter Stimmung, Sonnenschein, Sekt und leckeren Aperitifs zu einem besonderen Erlebnis gemacht haben.Besonderer Dank gilt dem Rheinauer Bürgermeister Oliver Rastetter für seinen offiziellen Besuch sowie Günther Zimmer von der Zimmer Group GmbH für seinen Besuch als auch die Möglichkeit zur Nutzung der Räumlichkeiten im Hofgut.', 'Wir freuen uns auf Ihren Besuch in unserer neuen Filiale in Bische!', 'Ihr Team HörGut an der Bühlot'],
		url: 'img/galerie/neueroeffnung-in-rheinau',
		slider_url: 'img/galerie/neueroeffnung-in-rheinau/slider',
		slider_pictures: [
			'eroeffnungs-buffett-rheinau-2.webp',
			'hoergut-rheinau-bischofsheim-aussenansicht-2.webp',
			'markus-reifschneider-mit-buergermeister-von-rheinau.webp'
		],
		image: 'kunst-am-bach.webp',
	},
];
