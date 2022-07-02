import { LinkStyle } from './link.styled';

export function ButtonLink({ to, bgcolor, children, ...props }) {
	const route = to ? to : '#';
	return (
		<LinkStyle {...props} to={route} bgcolor={bgcolor}>
			{children}
		</LinkStyle>
	);
}
