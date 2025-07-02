export interface Bauformen {
	bg_color: string;
	title: string;
	title_color: string;
	content: string[];
	content_color: string;
}

export const bauformen: Bauformen[] = [
	{
		bg_color: "var(--color-gray-light)",
		title: "Hinter-dem-Ohr (HdO)",
		title_color: "var(--color-orange-light)",
		content: ["Technik sitzt komplett hinter dem Ohr", "Anbindung über maßgefertigtes Ohrstück und Schallschlauch", "Ideal bei engen Gehörgängen oder hohem Verstärkungsbedarf"],
		content_color: "var(--color-black)",
	},
	{
		bg_color: "var(--color-blue-light)",
		title: "Im-Ohr (IdO)",
		title_color: "var(--color-blue-dark)",
		content: ["Technik vollständig im Gehörgang", "Diskret und fast unsichtbar", "Voraussetzung: genügend Platz und passende Anatomie", "Kann das natürliche Hören leicht verändern („Verschlusseffekt“)"],
		content_color: "var(--color-white)",
	},
	{
		bg_color: "rgba(235, 114, 31, 0.4)",
		title: "Ex-Hörer (RIC)",
		title_color: "var(--color-orange-light)",
		content: ["Mikrofon & Technik hinter dem Ohr, Lautsprecher direkt im Gehörgang", "Besonders klein, leicht & modern", "Gute Sprachübertragung durch kurze akustische Strecke", "Ideal für viele Hörverluste kombinierbar mit Akku & Bluetooth"],
		content_color: "var(--color-black)",
	}
]
