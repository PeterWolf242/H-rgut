export interface technikStufen {
	title: string;
	content: string[];
}

export const technikStufen: technikStufen[] = [
	{
		title: "Einstiegsklasse",
		content: ["Zwei-Stufen-Automatik: leise & laut", "Basisfokus nach vorn bei Lärm", "Zuzahlungsfrei mit Rezept"],
	},
	{
		title: "Einstieg plus (mit Akku)",
		content: ["Akku statt Batterie (24–26 h Laufzeit)", "Erste Komfortfunktionen wie Nebengeräuschdämpfung"],
	},
	{
		title: "Mittelklasse",
		content: ["Adaptive Fokusautomatik: richtet sich nach Situation", "Komfortprogramm bei reinem Störlärm", "In lauten Gesprächen verbesserter Sprachfilter"],
	},
	{
		title: "Obere Mittelklasse",
		content: ["Geräte kommunizieren untereinander", "Sprachquellen von Seite oder hinten werden erfasst", "Mehr Fokusdynamik für komplexe Umgebungen"],
	},
	{
		title: "Oberklasse",
		content: ["Volle Automatik, höchste Sprachqualität", "Beste Dämpfung von Wind & Störlärm", "Komfort auch bei leiser Sprache"],
	},
]
