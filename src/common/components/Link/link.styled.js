import styled from 'styled-components';
import { pxToRem } from '../../Styles/helpers';
import { Link } from 'react-router-dom';

export const LinkStyle = styled(Link)`
	padding: 10px 16px;
	text-align: center;
	font-size: ${pxToRem(16)};
	border: none;
	border-radius: 5px;
	color: white;
	background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : '#2f4f4f')};
`;
