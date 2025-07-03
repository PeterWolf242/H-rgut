import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import BackToTop from "../BackToTop";
import ScrollToTop from "../ScrollToTop";

export default function Layout() {
	return (
		<>
			<ScrollToTop />
			<Header />
			<Outlet />
			<Footer />
			<BackToTop />
		</>
	)
}
