import React from 'react';
import { CloseButton } from '../CloseButton';

interface IDropdownProps {
	button: React.ReactNode;
	children: React.ReactNode;
	className?: string;
}

export function Dropdown({ children, button, className }: IDropdownProps) {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<div className={className}>
			<button onClick={() => setIsOpen(!isOpen)}>{button}</button>
			{isOpen && (
				<ul>
					{children}
					<CloseButton onClick={() => setIsOpen(false)} />
				</ul>
			)}
		</div>
	);
}
