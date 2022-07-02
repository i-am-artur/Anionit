import styled from 'styled-components';
import { colors, fontSize } from '../../Styles/theme';

export const Wrapper = styled.div`
	display: flex;
	text-align: end;
	flex-direction: column;
`;
export const Heading = styled.h1`
	margin: 0;
	font-size: ${fontSize.general};
	color: ${colors.contrast};
`;

export const SubHeading = styled.h3`
	margin: 0;
	font-size: ${fontSize.small};
	font-weight: 600;
	color: ${colors.contrast_light};
`;

export const Separator = styled.div`
	margin-top: 20px;
	margin-bottom: 10px;
	margin-left: auto;
	width: 150px;
	height: 5px;
	background-color: #0b69aa;
`;
