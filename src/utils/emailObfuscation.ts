// Funktion zum Aufteilen der E-Mail-Adresse
export const obfuscateEmail = (email: string): string[] => {
	const [localPart, domain] = email.split('@');
	const domainParts = domain.split('.');

	// Teile die E-Mail in mehrere Teile auf
	return [
		localPart,
		domainParts[0],
		domainParts[1]
	];
};

// Funktion zum Zusammenfügen der E-Mail-Adresse
export const deobfuscateEmail = (parts: string[]): string => {
	if (parts.length !== 3) return '';
	return `${parts[0]}@${parts[1]}.${parts[2]}`;
};

// Funktion zum Erstellen eines mailto-Links
export const createMailtoLink = (parts: string[]): string => {
	const email = deobfuscateEmail(parts);
	return `mailto:${email}`;
};
