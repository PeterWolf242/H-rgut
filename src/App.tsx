import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from "react-router-dom"
import './index.css'
import Layout from "./components/layout/Layout"
import Home from "./pages/home/Home"
import Team from "./pages/team/Team"
import Leistungen from "./pages/leistungen/Leistungen"
import Aktuelles from "./pages/aktuelles/Aktuelles"
import Galerie from "./pages/galerie/Galerie"
import AlbumGalerie from "./pages/galerie/AlbumGalerie"
import { aktuelles } from "./interfaces/aktuelles"
import Contact from "./pages/contact/Contact"
import Filialen from "./pages/filialen/Filialen"
import Impressum from "./pages/impressum/Impressum"
import Datenschutz from "./pages/datenschutz/Datenschutz"

function App() {
	const router = createBrowserRouter(createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Navigate to="/Startseite" replace />} />
			<Route path="Startseite" element={<Home />} />
			<Route path="Leistungen" element={<Leistungen />} />
			<Route path="Team" element={<Team />} key="team-route" />
			<Route path="Aktuelles" element={<Aktuelles />} />
			<Route path="Galerie" element={<Galerie />} />
			<Route path="Filialen" element={<Filialen />} />
			<Route path="Kontakt" element={<Contact />} />
			{Array.isArray(aktuelles) && aktuelles.map((album) => (
				<Route
					key={album.url}
					path={`Galerie/${album.url.split('/').pop()}`}
					element={<AlbumGalerie album={album} />}
				/>
			))}
			<Route path="Impressum" element={<Impressum />} />
			<Route path="Datenschutz" element={<Datenschutz />} />
		</Route>
	))

	return <RouterProvider router={router} />;
}

export default App
