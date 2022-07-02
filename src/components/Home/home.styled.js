import styled from 'styled-components';
import intro_bg from '../../assets/intro-bg.jpg';
import { colors, fontSize, gap } from '../../common/Styles/theme';

export const Section = styled.section`
	display: flex;
	padding: ${gap.general};
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: ${fontSize.large};
	font-weight: bold;
	background-image: url(${intro_bg});
	background-size: cover;
	
`;
export const Heading = styled.h1`
	font-size: ${fontSize.x_large};
	color: white;
`;
export const Advantages = styled.p`
	//text-align: center;
	max-width: 410px;
	color: white;
`;
export const Description = styled.p`
	color: ${colors.contrast};
`;
