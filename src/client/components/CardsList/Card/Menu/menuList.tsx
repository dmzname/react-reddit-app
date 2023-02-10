import React from 'react';
import { IconComment, IconComplain, IconHide, IconSave, IconShare } from '../../../Icons';
import { nanoid } from 'nanoid';

const Icons = {
	comment: <IconComment />,
	share: <IconShare />,
	hide: <IconHide />,
	save: <IconSave />,
	complain: <IconComplain />,
};

export const menuList = [
	{
		text: 'Комментарии',
		icon: Icons.comment,
	},
	{
		text: 'Поделиться',
		icon: Icons.share,
	},
	{
		text: 'Скрыть',
		icon: Icons.hide,
	},
	{
		text: 'Сохранить',
		icon: Icons.save,
	},
	{
		text: 'Пожаловаться',
		icon: Icons.complain,
	},
].map((el) => ({ ...el, id: nanoid(5) }));

export const menuListMobile = [
	{
		text: 'Скрыть',
		icon: Icons.hide,
	},
	{
		text: 'Пожаловаться',
		icon: Icons.complain,
	},
].map((el) => ({ ...el, id: nanoid(5) }));
