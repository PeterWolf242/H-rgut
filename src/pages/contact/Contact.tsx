import React, { useState, useRef, useEffect } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import './Contact.css';
import { Helmet } from "react-helmet-async";
import { obfuscateEmail, deobfuscateEmail } from '../../utils/emailObfuscation';

// Konfiguration
const HCAPTCHA_SITE_KEY = import.meta.env.VITE_HCAPTCHA_SITE_KEY;
const RECIPIENT_EMAIL_PARTS = obfuscateEmail(import.meta.env.VITE_RECIPIENT_EMAIL || '');

if (!HCAPTCHA_SITE_KEY) {
	console.error('hCaptcha Site Key fehlt. Bitte fügen Sie VITE_HCAPTCHA_SITE_KEY in Ihre .env-Datei ein.');
}

if (!RECIPIENT_EMAIL_PARTS[0]) {
	console.error('Empfänger-E-Mail fehlt. Bitte fügen Sie VITE_RECIPIENT_EMAIL in Ihre .env-Datei ein.');
}

interface FormData {
	name: string;
	email: string;
	message: string;
	privacyAccepted: boolean;
	honeypot?: string;
	timestamp: number;
}

interface FormErrors {
	name?: string;
	email?: string;
	message?: string;
	privacyAccepted?: string;
	spam?: string;
	captcha?: string;
}

const Contact: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		message: '',
		privacyAccepted: false,
		honeypot: '',
		timestamp: Date.now()
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [captchaToken, setCaptchaToken] = useState<string | null>(null);
	const captchaRef = useRef<HCaptcha>(null);

	useEffect(() => {
		if (!HCAPTCHA_SITE_KEY) {
			setErrors(prev => ({
				...prev,
				captcha: 'Captcha-Konfiguration fehlt. Bitte kontaktieren Sie den Administrator.'
			}));
		}
	}, []);

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		// Spam-Prävention: Überprüfe Zeitstempel
		const currentTime = Date.now();
		const formTime = formData.timestamp;
		const timeDiff = currentTime - formTime;

		if (timeDiff < 5000) {
			newErrors.spam = 'Bitte nehmen Sie sich etwas mehr Zeit zum Ausfüllen des Formulars';
			setErrors(newErrors);
			return false;
		}

		if (formData.honeypot) {
			return false;
		}

		if (!formData.name.trim()) {
			newErrors.name = 'Bitte geben Sie Ihren Namen ein';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
		}

		if (!formData.message.trim()) {
			newErrors.message = 'Bitte geben Sie Ihre Nachricht ein';
		}

		if (!formData.privacyAccepted) {
			newErrors.privacyAccepted = 'Bitte akzeptieren Sie die Datenschutzerklärung';
		}

		if (!captchaToken) {
			newErrors.captcha = 'Bitte bestätigen Sie, dass Sie kein Roboter sind';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isSubmitting) return;

		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);

		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					message: formData.message,
					recipient: deobfuscateEmail(RECIPIENT_EMAIL_PARTS),
					captchaToken: captchaToken
				}),
			});

			if (!response.ok) {
				throw new Error('Fehler beim Senden der E-Mail');
			}

			setSubmitStatus('success');
			setFormData({
				name: '',
				email: '',
				message: '',
				privacyAccepted: false,
				honeypot: '',
				timestamp: Date.now()
			});
			setCaptchaToken(null);
			if (captchaRef.current) {
				captchaRef.current.resetCaptcha();
			}
		} catch (error) {
			console.error('Fehler beim Senden der E-Mail:', error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value, type } = e.target;
		const checked = (e.target as HTMLInputElement).checked;

		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value
		}));
	};

	return (
		<main>
			<Helmet>
				<link rel="canonical" href="https://hoergut-buehlot.de/Kontakt" />
			</Helmet>
			<div className="container">
				<h1 className="h1-bold site-title">Kontakt</h1>
			</div>
			<div className="contact-form container">
				<form onSubmit={handleSubmit}>
					<div style={{ display: 'none' }}>
						<input
							type="text"
							name="honeypot"
							value={formData.honeypot}
							onChange={handleChange}
							tabIndex={-1}
							autoComplete="off"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="name">Name *</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
						{errors.name && <div className="error-message">{errors.name}</div>}
					</div>

					<div className="form-group">
						<label htmlFor="email">E-Mail *</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						{errors.email && <div className="error-message">{errors.email}</div>}
					</div>

					<div className="form-group">
						<label htmlFor="message">Nachricht *</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
						/>
						{errors.message && <div className="error-message">{errors.message}</div>}
					</div>

					<div className="checkbox-group">
						<input
							type="checkbox"
							id="privacyAccepted"
							name="privacyAccepted"
							checked={formData.privacyAccepted}
							onChange={handleChange}
							required
						/>
						<label htmlFor="privacyAccepted">
							Ich akzeptiere die Datenschutzerklärung *
						</label>
						{errors.privacyAccepted && (
							<div className="error-message">{errors.privacyAccepted}</div>
						)}
					</div>

					<div className="captcha-container">
						{HCAPTCHA_SITE_KEY ? (
							<HCaptcha
								ref={captchaRef}
								sitekey={HCAPTCHA_SITE_KEY}
								onVerify={(token) => setCaptchaToken(token)}
								theme="light"
								size="compact"
							/>
						) : (
							<div className="error-message">
								Captcha ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.
							</div>
						)}
						{errors.captcha && <div className="error-message">{errors.captcha}</div>}
					</div>

					{errors.spam && <div className="error-message">{errors.spam}</div>}

					<button
						type="submit"
						className="submit-button"
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
					</button>

					{submitStatus === 'success' && (
						<div className="success-message">
							Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.
						</div>
					)}
					{submitStatus === 'error' && (
						<div className="error-message">
							Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
						</div>
					)}
				</form>
			</div>
		</main>
	);
};

export default Contact;
