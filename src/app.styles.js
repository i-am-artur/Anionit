import styled from 'styled-components';
import routeList from './components/AppRouter/routeList';
import { fontSize, gap, media, width } from './common/Styles/theme';

export const Main = styled.main`
	max-width: ${width.max_width};
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: ${({ pathname }) =>
		pathname === routeList.home
			? '0'
			: `${gap.general} ${gap.general} 50px ${gap.general}`};

	${media.Desktop} {
		margin-left: auto;
		margin-right: auto;
	}
`;
