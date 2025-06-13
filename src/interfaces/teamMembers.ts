export type TeamMember = {
	id: string;
	name: string;
	role: string;
	description: string;
	image: string;
	class: string;
}

export const teamMembers: TeamMember[] = [
	{
		id: 'markus-reifschneider-2024',
		name: 'Markus Reifschneider',
		role: 'Hörakustikmeister & Geschäftsführer',
		description:
			'… ist selbstständiger Gesellschafter und Hörakustikmeister sowie angehender Betriebswirt und kann dabei in der Hörakustik eine mehrjährige Erfahrung als Hörakustiker und Fachgeschäftsleiter aufweisen.',
		image:
			'/img/portraitbild-markus-reifschneider-hoergut-buehl.png',
		class: 'team-img-1',
	},
	{
		id: 'melanie-schmidt-2024',
		name: 'Melanie Schmidt',
		role: 'Service- und Officekraft',
		description:
			'… arbeitet bereits seit einigen Jahren in der Hörakustik als Service- und Officekraft und steht unseren Kunden – nebst ihrer administrativen Tätigkeit – in allen Anliegen rund um Hörgerätezubehör sowie Servicefragen stets fachkompetent und immer freundlich zur Seite.',
		image:
			'/img/portraitbild-melanie-schmidt-hoergut-buehl.png',
		class: 'team-img-2',
	},
];
