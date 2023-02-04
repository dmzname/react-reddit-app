import React from 'react';
import styles from './header.sass';
import { SearchBlock } from './SearchBlock';
import { ThreadTitle } from './ThreadTitle';
import { SortBlock } from './SortBlock';

export function Header() {
	return (
		<header className={styles.root}>
			<SearchBlock />
			<ThreadTitle />
			<SortBlock />
		</header>
	);
}
