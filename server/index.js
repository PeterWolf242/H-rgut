const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { render } = require('@react-email/render');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// E-Mail-Transporter Konfiguration
const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: Number(process.env.SMTP_PORT),
	secure: true,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASSWORD,
	},
});

// E-Mail-Template
const ContactEmail = ({ name, email, message }) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c3e50;">Neue Kontaktanfrage von der Website</h2>

        <div style="margin-top: 20px; padding: 20px; background-color: #f8f9fa; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            <p><strong>Nachricht:</strong></p>
            <div style="padding: 15px; background-color: #ffffff; border-radius: 5px; border: 1px solid #dee2e6; margin-top: 10px;">
                ${message.split('\n').map(line => `<p style="margin: 0 0 10px 0;">${line}</p>`).join('')}
            </div>
        </div>

        <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 12px; color: #6c757d;">
            <p>Diese E-Mail wurde über das Kontaktformular auf hoergut-buehlot.de gesendet.</p>
        </div>
    </div>
`;

// E-Mail-Versand-Endpunkt
app.post('/api/send-email', async (req, res) => {
	try {
		const { name, email, message, recipient } = req.body;

		// E-Mail-Optionen
		const mailOptions = {
			from: `"HörGut Bühl Website" <${process.env.SMTP_USER}>`,
			to: recipient,
			replyTo: email,
			subject: `Neue Kontaktanfrage von ${name}`,
			html: ContactEmail({ name, email, message }),
		};

		// E-Mail senden
		const info = await transporter.sendMail(mailOptions);
		console.log('E-Mail erfolgreich gesendet:', info.messageId);
		res.json({ success: true, messageId: info.messageId });
	} catch (error) {
		console.error('Fehler beim Senden der E-Mail:', error);
		res.status(500).json({ success: false, error: 'Fehler beim Senden der E-Mail' });
	}
});

// Server starten
app.listen(port, () => {
	console.log(`Server läuft auf Port ${port}`);
});
