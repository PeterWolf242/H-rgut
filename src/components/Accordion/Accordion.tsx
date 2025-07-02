import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import './Accordion.css';

interface AccordionItem {
	title: string;
	content: string[];
}

interface AccordionProps {
	items: AccordionItem[];
}

const AnimatedAccordionItem = ({
	item,
	index,
	delay = 0,
	isOpen,
	onToggle
}: {
	item: AccordionItem;
	index: number;
	delay: number;
	isOpen: boolean;
	onToggle: () => void;
}) => {
	const ref = useRef(null);
	const inView = useInView(ref, { amount: 0.5, triggerOnce: false });

	return (
		<motion.div
			ref={ref}
			data-index={index}
			initial={{ scale: 0.7, opacity: 0 }}
			animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
			transition={{ duration: 0.2, delay }}
			style={{ marginBottom: '1rem' }}
		>
			<div className={`accordion-item ${isOpen ? 'open' : ''}`}>
				<button
					className="accordion-header"
					onClick={onToggle}
					aria-expanded={isOpen}
					aria-controls={`accordion-content-${index}`}
				>
					<span className="accordion-title">{item.title}</span>
					<span className="accordion-icon">
						{isOpen ? '−' : '+'}
					</span>
				</button>
				<div
					id={`accordion-content-${index}`}
					className="accordion-content"
					aria-hidden={!isOpen}
				>
					<div className="accordion-content-inner">
						<ul>
							{item.content.map((contentItem, contentIndex) => (
								<li key={contentIndex}>{contentItem}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default function Accordion({ items }: AccordionProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const [keyboardNav, setKeyboardNav] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const listRef = useRef(null);

	const toggleItem = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
				e.preventDefault();
				setKeyboardNav(true);
				setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
			} else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
				e.preventDefault();
				setKeyboardNav(true);
				setSelectedIndex((prev) => Math.max(prev - 1, 0));
			} else if (e.key === 'Enter') {
				if (selectedIndex >= 0 && selectedIndex < items.length) {
					e.preventDefault();
					toggleItem(selectedIndex);
				}
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [items, selectedIndex]);

	useEffect(() => {
		if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
		const container = listRef.current as HTMLElement;
		const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`);
		if (selectedItem) {
			const extraMargin = 50;
			const containerScrollTop = container.scrollTop;
			const containerHeight = container.clientHeight;
			const itemTop = (selectedItem as HTMLElement).offsetTop;
			const itemBottom = itemTop + (selectedItem as HTMLElement).offsetHeight;
			if (itemTop < containerScrollTop + extraMargin) {
				container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
			} else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
				container.scrollTo({
					top: itemBottom - containerHeight + extraMargin,
					behavior: 'smooth',
				});
			}
		}
		setKeyboardNav(false);
	}, [selectedIndex, keyboardNav]);

	return (
		<div className="scroll-list-container">
			<div ref={listRef} className="scroll-list">
				{items.map((item, index) => (
					<AnimatedAccordionItem
						key={index}
						item={item}
						index={index}
						delay={0.1}
						isOpen={openIndex === index}
						onToggle={() => toggleItem(index)}
					/>
				))}
			</div>
		</div>
	);
}
