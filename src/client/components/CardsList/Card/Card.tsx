import React from 'react';
import styles from './card.sass';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

export function Card() {
	return (
		<li className={styles.root}>
			<TextContent />
			<Preview />
			<Menu />
			<Controls />
		</li>
	);
}
