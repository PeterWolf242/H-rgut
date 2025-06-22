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
		description: ['Mit viel Leidenschaft und Fachkompetenz möchten wir ab sofort auch hier für besseres Hören und mehr Lebensqualität sorgen. Unser engagiertes Team steht Ihnen bei allen Fragen rund ums Hören zur Seite — von der individuellen Beratung über modernste Hörgeräte-Anpassung bis hin zum professionellen Gehörschutz. ', 'Besuchen Sie uns in unseren hellen, barrierefreien Räumlichkeiten und überzeugen Sie sich selbst von unserem persönlichen Service.', 'Wir freuen uns darauf, Sie kennenzulernen und gemeinsam mit Ihnen den Weg zu einem besseren Hörerlebnis zu gestalten. Kommen Sie vorbei!'],
		url: 'img/galerie/neueroeffnung-in-rheinau',
		slider_url: 'img/galerie/neueroeffnung-in-rheinau/slider',
		slider_pictures: [
			'neueroeffnung-in-rheinau-logo.webp',
			'neueroeffnung-in-rheinau-5.webp',
			'neueroeffnung-in-rheinau-6.webp',
			'neueroeffnung-in-rheinau-8.webp'
		],
		image: 'kunst-am-bach.webp',
	},
];
