import React, { useEffect } from 'react';
import './Modal.css';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	children: React.ReactNode;
	size?: 'small' | 'medium' | 'large';
}

export default function Modal({
	isOpen,
	onClose,
	title,
	children,
	size = 'medium'
}: ModalProps) {
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleEscape);
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.body.style.overflow = 'unset';
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div
				className={`modal-content modal-${size}`}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="modal-header">
					{title && <h2 className="modal-title">{title}</h2>}
					<button
						className="modal-close"
						onClick={onClose}
						aria-label="Modal schließen"
					>
						×
					</button>
				</div>
				<div className="modal-body">
					{children}
				</div>
			</div>
		</div>
	);
}
