import styled from 'styled-components';
import { gap } from './theme';

export const ProductTitle = styled.h3`
	margin-top: ${gap.general};
	margin-bottom: 0;
	color: ${({ color }) => (color ? color : 'inherit')};
`;

export const ProductWrapper = styled.div`
	margin-top: ${gap.m_section};
	row-gap: ${gap.original};
	display: flex;
	flex-direction: column;
`;
