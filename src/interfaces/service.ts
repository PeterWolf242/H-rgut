export interface Service {
	image: string;
	title: string;
	description: string;
	url: string;
}

export const services: Service[] = [
	{
		image: "/img/hoersysteme-logo.webp",
		title: "Hörgeräte",
		description: "Wir bieten eine breite Palette an Hörgeräten von den bekanntesten Marken wie Phonak, Siemens, Oticon und weiteren an. Wir beraten Sie gerne und finden das passende Hörgerät für Sie.",
		url: "/Leistungen"
	},
	{
		image: "/img/tinnitus-logo.webp",
		title: "Tinnitus",
		description: "Wir bieten eine breite Palette an Hörgeräten von den bekanntesten Marken wie Phonak, Siemens, Oticon und weiteren an. Wir beraten Sie gerne und finden das passende Hörgerät für Sie.",
		url: "/Leistungen"
	},
	{
		image: "/img/gehoerschutz-logo.webp",
		title: "Gehörschutz",
		description: "Wir bieten eine breite Palette an Hörgeräten von den bekanntesten Marken wie Phonak, Siemens, Oticon und weiteren an. Wir beraten Sie gerne und finden das passende Hörgerät für Sie.",
		url: "/Leistungen"
	},
];
