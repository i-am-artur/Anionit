import styled, { css } from 'styled-components';
import routeList from './components/AppRouter/routeList';
import { gap, width } from './common/Styles/theme';

const homePage = css`
	padding: 0;
`;
const otherPages = css`
	box-sizing: border-box;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	padding: ${gap.general} ${gap.general} 50px ${gap.general};
	max-width: ${width.max_width};
`;
export const Main = styled.main`
	display: flex;
	flex-direction: column;
	flex: 1;
	${({ pathname }) => (pathname === routeList.home ? homePage : otherPages)}}
`;
