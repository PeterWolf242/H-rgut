export interface Service {
	image: string;
	title: string;
	description: string;
	url: string;
}

export const services: Service[] = [
	{
		image: "/img/hoergeraete-logo.webp",
		title: "Hörgeräte",
		description: "Hörgeräte verbessern das Sprachverstehen und steigern Ihre Lebensqualität. Wir beraten Sie persönlich und passen individuell an - diskret, modern und auf dem neusten Stand der Technik.",
		url: "/Hoergeraete"
	},
	{
		image: "/img/tinnitus-logo.webp",
		title: "Tinnitus",
		description: "Störende Ohrgeräusche wie Pfeifen oder Rauschen? Wir unterstützen Sie mit Beratung und passenden Lösungen, um den Tinnitus spürbar zu lindern und den Alltag wieder angenehmer zu gestalten.",
		url: "/Tinnitus"
	},
	{
		image: "/img/gehoerschutz-logo.webp",
		title: "Gehörschutz",
		description: "Lärm belastet das Gehör dauerhaft. Wir bieten individuell angepassten Gehörschutz – ideal für Beruf, Freizeit oder Schlaf. Leicht, komfortabel und genau auf Ihre Bedürfnisse abgestimmt.",
		url: "/Gehoerschutz"
	},
];
