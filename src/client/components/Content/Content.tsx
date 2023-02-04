import React from 'react';
import styles from './content.sass';

interface IContentProps {
	children: React.ReactNode;
}

export function Content({ children }: IContentProps) {
	return <main className={styles.root}>{children}</main>;
}
