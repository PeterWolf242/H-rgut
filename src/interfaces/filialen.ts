export interface Filiale {
	id: string;
	name: string;
	image: string;
	mapImage: string;
	strasse: string;
	plz: string;
	ort: string;
	oeffnungszeiten: string[];
}

export const filialen: Filiale[] = [
	{
		id: "buehl",
		name: "Bühl",
		image: "img/aussenansicht-hoergut-buehl.webp",
		mapImage: "img/open-street-map-hoergut-buehl.webp",
		strasse: "Hüfflischer Hof 13",
		plz: "77815",
		ort: "Bühl",
		oeffnungszeiten: [
			"Mo - Fr: 09:00 - 18:00 Uhr",
			"Sa: 09:00 - 12:00 Uhr",
			"Oder Termin nach Absprache"
		],
	},
	{
		id: "Rheinau",
		name: "Rheinau",
		image: "img/hoergut-rheinau-bischofsheim-aussenansicht.webp",
		mapImage: "img/open-street-map-hoergut-rheinau.webp",
		strasse: "Renchener Str. 1a",
		plz: "77866",
		ort: "Rheinau",
		oeffnungszeiten: [
			"Mi: 09:00 - 12:00 Uhr",
			"Sa: 14:00 - 16:00 Uhr",
		],
	}
];
