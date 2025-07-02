import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import BackToTop from "../BackToTop";
import ScrollToTop from "../ScrollToTop";
<<<<<<< HEAD
=======
import CookieBanner from "../cookieBanner/CookieBanner";
>>>>>>> 24d7f3b708bf351b38722fe60ba3eb4096b4bcd1

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
