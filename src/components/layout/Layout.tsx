import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import BackToTop from "../BackToTop";
import ScrollToTop from "../ScrollToTop";
import CookieBanner from "../CookieBanner";

export default function Layout() {
	return (
		<>
			<ScrollToTop />
			<Header />
			<Outlet />
			<Footer />
			<BackToTop />
			<CookieBanner />
		</>
	)
}
