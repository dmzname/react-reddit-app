import React from 'react';
import styles from './textcontent.sass';

export function TextContent() {
	return (
		<div className={styles.root}>
			<div className={styles.metaData}>
				<div className={styles.userLink}>
					<img
						className={styles.avatar}
						src={
							'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
						}
						alt='avatar'
					/>
					<a href='#user-url' className={styles.username} target='_blank'>
						Дмитрий Гришин
					</a>
				</div>
				<span className={styles.createdAt}>
					<span className={styles.publishedLabel}>опубликовано </span>5 часов назад
				</span>
			</div>

			<h2>Противоположная точка зрения на данную проблему</h2>
		</div>
	);
}
