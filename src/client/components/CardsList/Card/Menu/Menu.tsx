import React from 'react';
import styles from './menu.sass';
import { MenuButton } from './MenuButton';

export function Menu() {
	return (
		<div className={styles.root}>
			<MenuButton />
		</div>
	);
}
