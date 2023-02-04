import React from 'react';
import styles from './preview.sass';

export function Preview() {
	return (
		<div className={styles.root}>
			<img
				src={
					'https://images.unsplash.com/photo-1675430420657-72694b2f66be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
				}
				alt='Preview'
			/>
		</div>
	);
}
