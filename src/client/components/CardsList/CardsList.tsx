import React from 'react';
import styles from './cardslist.sass';
import { Card } from './Card';

export function CardsList() {
	return (
		<ul className={styles.root}>
			{[...new Array(3)].map((item, index) => (
				<Card key={index} />
			))}
		</ul>
	);
}
