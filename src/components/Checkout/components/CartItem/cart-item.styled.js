import styled from 'styled-components';
import { gap } from '../../../../common/Styles/theme';

export const Header = styled.div`
	grid-column: 1 / span 2;
	display: flex;
	column-gap: ${gap.original};
	${({ color }) => `color: ${color}`}
`;

export const Heading = styled.h4`
	margin: 0;
`;
export const Total = styled.div`
	text-align: right;
`;
export const TotalHighlighted = styled(Total)`
	text-align: right;
	font-weight: bold;
`;
