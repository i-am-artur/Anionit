import styled from 'styled-components';
import routeList from './components/AppRouter/routeList';
import { gap } from './common/Styles/theme';

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: ${({ pathname }) =>
		pathname === routeList.home ? '0' : gap.general};
`;
