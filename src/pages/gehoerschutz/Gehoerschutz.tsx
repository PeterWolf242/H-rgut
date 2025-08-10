import "../../Leistungen.css";
import "./Gehoerschutz.css";
import { gehoerschutz } from "../../interfaces/gehoerschutz";
import { Helmet } from "react-helmet-async";
import { useRef, useEffect, useState } from "react";

const blockColors = ["#eb721f", "#038cb2", "#e6f3fb", "#398ccb"];

// LazyVideo Komponente mit mehreren Quellen
const LazyVideo = ({ sources }: { sources: { src: string; type: string }[] }) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (videoRef.current) {
			observer.observe(videoRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<video
			ref={videoRef}
			autoPlay={isVisible}
			loop
			muted
			playsInline
		>
			{isVisible && sources.map((source, index) => (
				<source key={index} src={source.src} type={source.type} />
			))}
		</video>
	);
};

export default function Gehoerschutz() {
	return (
		<main>
			<Helmet>
				<link rel="canonical" href="https://hoergut-buehlot.de/Gehoerschutz" />
			</Helmet>
			<div className="container">
				<section className="hero-section gehoerschutz-hero-section">
					<article className="hero-text">
						<h1 className="site-title-alone">
							Geh&ouml;rschutz
						</h1>
						<h2>
							Individuelle L&ouml;sungen f&uuml;r Arbeit und Freizeit
						</h2>
					</article>
					<div className="hero-image">
						<img src="../../img/sowei-unlimited-weiss.webp" alt="Gehörschutz Duo" />
					</div>
				</section>
			</div>

			<section className="gehoerschutz-grid container">
				{gehoerschutz.map((item, idx) => {
					const baseColor = blockColors[idx % blockColors.length];
					const style = { background: baseColor };
					return (
						<div key={idx} className="gehoerschutz-box" style={style}>
							<div className="gehoerschutz-content">
								<div className="gehoerschutz-image">
									<img src={item.url} alt={item.description} />
								</div>
								<div className="gehoerschutz-text">
									<p>{item.text}</p>
								</div>
							</div>
						</div>
					);
				})}
			</section>

			<div className="container">
				<section className="image-video-section">
					<div className="image-video-image">
						<LazyVideo
							sources={[
								{ src: "../../videos/marketing-video-gehoerschutz-gehoerluchs.mp4", type: "video/mp4" },
								{ src: "../../videos/marketing-video-gehoerschutz-gehoerluchs.webm", type: "video/webm" }
							]}
						/>
					</div>
				</section>
			</div>

			<section className="container">
				<article className="more-info-section">
					<h2>Gut zu wissen:</h2>
					<p>
						In vielen Fällen kann dieser individuelle Gehörschutz über die Berufsgenossenschaft (BG) abgerechnet werden, sodass dem Mitarbeiter selbst keine oder nur geringe Kosten entstehen.
					</p>
				</article>
			</section>
		</main>
	)
}
