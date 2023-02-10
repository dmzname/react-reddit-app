import React from 'react';
import styles from './closebutton.sass';

interface ICloseButton {
	onClick: () => void;
}

export function CloseButton({ onClick }: ICloseButton) {
	return (
		<li className={styles.root}>
			<button onClick={onClick}>Закрыть</button>
		</li>
	);
}
