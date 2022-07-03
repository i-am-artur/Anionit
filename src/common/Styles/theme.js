import { pxToRem } from './helpers';

export const base_fontSize = 16;

export const colors = {
	main: '#92d7f0',
	contrast: '#0b69aa',
	contrast_light: '#12a0d4',
	text: '#2c3e50',
};

export const gap = {
	original: '8px',
	general: '16px',
	section: '24px',
	m_section: '32px',
};

export const radius = {
	project: '5px',
};

export const fontSize = {
	x_small: pxToRem(17),
	small: pxToRem(19),
	general: pxToRem(22),
	large: pxToRem(25),
	x_large: pxToRem(48),
};

export const width = {
	tablet: '600px',
	desktop: '768px',
	max_width: '986px',
};

export const media = {
	Tablet: `@media (min-width: ${width.tablet})`,
	Desktop: `@media (min-width: ${width.desktop})`,
	Max_Width: `@media (min-width: ${width.max_width})`,
};
