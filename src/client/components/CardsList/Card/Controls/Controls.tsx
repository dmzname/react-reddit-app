import React from 'react';
import styles from './controls.sass';
import { Actions } from './Actions';
import { CommentButton } from './CommentButton';
import { KarmaCounter } from './KarmaCounter';

export function Controls() {
	return (
		<div className={styles.root}>
			<KarmaCounter />
			<CommentButton />
			<Actions />
		</div>
	);
}
