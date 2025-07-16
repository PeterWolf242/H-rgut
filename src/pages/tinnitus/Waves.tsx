import { useEffect, useRef } from 'react';

interface WavesProps {
	amplitude?: number;
	frequency?: number;
	speed?: number;
	opacity?: number;
}

export default function Waves({
	amplitude = 50,
	frequency = 0.02,
	speed = 0.02,
	opacity = 0.3
}: WavesProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animationId: number;
		let time = 0;

		// Canvas-Größe setzen
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);

		// Wellen zeichnen
		const drawWaves = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Mehrere Wellen mit unterschiedlichen Eigenschaften
			const waves = [
				{ amplitude: amplitude, frequency: frequency, speed: speed, yOffset: canvas.height * 0.3, opacity: opacity },
				{ amplitude: amplitude * 0.7, frequency: frequency * 1.5, speed: speed * 1.2, yOffset: canvas.height * 0.5, opacity: opacity * 0.7 },
				{ amplitude: amplitude * 0.5, frequency: frequency * 2, speed: speed * 0.8, yOffset: canvas.height * 0.7, opacity: opacity * 0.5 }
			];

			waves.forEach((wave, index) => {
				ctx.save();
				ctx.strokeStyle = 'var(--color-blue-light)';
				ctx.lineWidth = 2;
				ctx.globalAlpha = wave.opacity;

				ctx.beginPath();

				for (let x = 0; x <= canvas.width; x += 2) {
					const y = wave.yOffset +
						Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
						Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 0.7) * wave.amplitude * 0.3;

					if (x === 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}
				}

				ctx.stroke();
				ctx.restore();
			});

			time += 1;
			animationId = requestAnimationFrame(drawWaves);
		};

		drawWaves();

		// Cleanup
		return () => {
			window.removeEventListener('resize', resizeCanvas);
			cancelAnimationFrame(animationId);
		};
	}, [amplitude, frequency, speed, opacity]);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: 1
			}}
		/>
	);
}
