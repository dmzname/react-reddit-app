import React from 'react';
import { Dropdown } from './Dropdown';
import { MenuButton } from './MenuButton';
import styles from './menu.sass';
import { menuList } from './menuList';

export function Menu() {
	return (
		<Dropdown className={styles.root} button={<MenuButton />}>
			{menuList.map((el) => (
				<li key={el.id} onClick={() => console.log(el.id)}>
					{el.icon}
					{el.text}
				</li>
			))}
		</Dropdown>
	);
}
