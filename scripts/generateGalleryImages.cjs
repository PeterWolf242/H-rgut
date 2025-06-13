const fs = require('fs');
const path = require('path');

const galeriePath = path.join(__dirname, '../public/img/galerie');
const outputPath = path.join(__dirname, '../src/assets/galerieBilder.json');

function isImage(file) {
	return /\.(webp|jpg|jpeg|png|gif)$/i.test(file);
}

function getAlbumImages(albumDir) {
	const files = fs.readdirSync(albumDir, { withFileTypes: true });
	return files
		.filter(f => f.isFile() && isImage(f.name))
		.map(f => f.name);
}

function getAllAlbums() {
	const albums = {};
	const albumDirs = fs.readdirSync(galeriePath, { withFileTypes: true })
		.filter(dirent => dirent.isDirectory());

	albumDirs.forEach(albumDir => {
		const albumName = albumDir.name;
		const albumPath = path.join(galeriePath, albumName);

		// Alle Bilder im Album-Ordner (ohne slider-Unterordner)
		let images = getAlbumImages(albumPath);

		// Slider-Bilder aus Unterordner entfernen
		const sliderPath = path.join(albumPath, 'slider');
		if (fs.existsSync(sliderPath)) {
			const sliderImages = getAlbumImages(sliderPath);
			// Entferne Slider-Bilder aus dem Hauptarray, falls sie doppelt sind
			images = images.filter(img => !sliderImages.includes(img));
		}

		albums[albumName] = images;
	});

	return albums;
}

const result = getAllAlbums();
fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
console.log('Galerie-Bilder wurden erfolgreich generiert:', outputPath);
